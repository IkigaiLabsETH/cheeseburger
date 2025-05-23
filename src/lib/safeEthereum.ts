/**
 * Utility for safely accessing the window.ethereum object
 * This helps prevent conflicts when multiple libraries try to define ethereum
 */

import { logger } from './logger';

/**
 * Ethereum provider interface
 */
interface EthereumProvider {
  request: (args: { method: string; params?: unknown[] }) => Promise<unknown>;
  isMetaMask?: boolean;
  // Add other ethereum provider properties as needed
}

/**
 * Safely get the window.ethereum object if it exists
 * @returns The window.ethereum object or null if not available
 */
export const getEthereum = (): EthereumProvider | null => {
  if (typeof window === 'undefined') return null;

  try {
    // Check if ethereum exists on window
    if (Object.prototype.hasOwnProperty.call(window, 'ethereum')) {
      return window.ethereum as EthereumProvider;
    }
    return null;
  } catch (e) {
    logger.warn('Error accessing ethereum object:', e);
    return null;
  }
};

/**
 * Safely get the wallet address from window.ethereum
 * @returns Wallet address or null if not available
 */
export const getConnectedAddress = async (): Promise<string | null> => {
  const ethereum = getEthereum();
  if (!ethereum) return null;

  try {
    const accounts = await ethereum.request({ method: 'eth_accounts' }) as string[];
    return accounts && accounts.length > 0 ? accounts[0] : null;
  } catch (e) {
    logger.warn('Error getting connected address:', e);
    return null;
  }
};

/**
 * Check if MetaMask or another wallet provider is available
 * @returns Boolean indicating if a provider is available
 */
export const hasEthereumProvider = (): boolean => {
  return getEthereum() !== null;
};

// Add TypeScript support for window.ethereum
declare global {
  interface Window {
    ethereum?: EthereumProvider;
  }
} 