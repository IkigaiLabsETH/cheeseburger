"use client";

import React, { useState, useEffect } from 'react';
import useSWR from 'swr';
import QRCode from 'react-qr-code';

const fetcher = (url: string) => fetch(url).then(res => res.json());

type LightningPaymentWidgetProps = {
  amount?: number;
  memo?: string;
  open?: boolean;
  onClose?: () => void;
  onPaymentSuccess?: () => void;
};

export default function LightningPaymentWidget({
  amount = 21,
  memo = "",
  open = true,
  onClose,
  onPaymentSuccess,
}: LightningPaymentWidgetProps) {
  const [invoice, setInvoice] = useState<null | {
    paymentRequest: string;
    paymentHash: string;
    expiresAt: string;
  }>(null);
  const [error, setError] = useState<string | null>(null);
  const [pollingReady, setPollingReady] = useState(false);

  // Poll status if invoice exists
  useEffect(() => {
    if (invoice) {
      setPollingReady(false);
      const timer = setTimeout(() => setPollingReady(true), 300);
      return () => clearTimeout(timer);
    }
  }, [invoice]);
  const { data: statusData } = useSWR(
    invoice && pollingReady ? `/api/lightning/invoice-status/${invoice.paymentHash}` : null,
    fetcher,
    { refreshInterval: 2000 }
  );

  // Create invoice on mount or when open/amount/memo changes
  useEffect(() => {
    if (open) {
      setError(null);
      setInvoice(null);
      (async () => {
        try {
          const res = await fetch("/api/lightning/create-invoice", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ amount, memo }),
          });

          let data;
          try {
            const text = await res.text();
            data = text ? JSON.parse(text) : {};
          } catch {
            data = {};
          }

          if (!res.ok) throw new Error(data.error || `Failed to create invoice (status ${res.status})`);
          setInvoice({
            paymentRequest: data.paymentRequest,
            paymentHash: data.paymentHash,
            expiresAt: data.expiresAt,
          });
        } catch (err: unknown) {
          let message = "Unknown error";
          if (err instanceof Error) message = err.message;
          setError(message);
        }
      })();
    }
  }, [amount, memo, open]);

  // Call onPaymentSuccess when payment is settled
  useEffect(() => {
    if (statusData && statusData.status === "settled" && onPaymentSuccess) {
      onPaymentSuccess();
    }
  }, [statusData, onPaymentSuccess]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
      <div className="max-w-md w-full p-6 rounded-lg shadow-lg border border-black bg-[#111] text-white relative" style={{ boxShadow: '5px 5px 0 #000' }}>
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-white text-2xl font-bold hover:text-[#F7B500]"
          aria-label="Close"
        >
          ×
        </button>
        {error && <div className="text-red-400 mb-2">{error}</div>}
        {invoice && (
          <div className="p-4 bg-[#18181b] text-white rounded-lg border border-[#333] shadow-lg" style={{ boxShadow: '5px 5px 0 #222' }}>
            <div>
              <span className="font-bold text-[#F7B500]">Invoice:</span>
              <div className="break-all text-xs bg-[#232323] text-[#F7B500] p-2 rounded border border-[#F7B500] mt-1">{invoice.paymentRequest}</div>
            </div>
            <div className="flex justify-center my-4">
              <QRCode value={invoice.paymentRequest} bgColor="#fff" fgColor="#111" size={180} />
            </div>
            <div className="text-sm text-gray-400">
              Expires at: {new Date(invoice.expiresAt).toLocaleString()}
            </div>
          </div>
        )}
        {invoice && (
          <div className="mt-6">
            {statusData && statusData.status === 'pending' && (
              <div className="text-[#F7B500] font-semibold animate-pulse">
                Waiting for payment…
              </div>
            )}
            {statusData && statusData.status === 'settled' && (
              <div className="text-green-400 font-bold text-lg animate-bounce flex flex-col items-center">
                <span className="text-3xl mb-2">🎉</span>
                Payment received!<br />
                <span className="text-[#F7B500] text-base mt-1 animate-pulse">Reward unlocked!</span>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
} 