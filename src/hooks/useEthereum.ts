import { useState, useCallback } from 'react';
import { BrowserProvider } from 'ethers';

export function useEthereum() {
  const [address, setAddress] = useState<string>('');
  const [isConnected, setIsConnected] = useState(false);
  const [showMetaMaskDialog, setShowMetaMaskDialog] = useState(false);
  const [showErrorDialog, setShowErrorDialog] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const connectWallet = useCallback(async () => {
    if (typeof window.ethereum === 'undefined') {
      setShowMetaMaskDialog(true);
      return;
    }

    try {
      const provider = new BrowserProvider(window.ethereum);
      const accounts = await provider.send('eth_requestAccounts', []);
      
      if (accounts.length > 0) {
        setAddress(accounts[0]);
        setIsConnected(true);
      }
    } catch (error: any) {
      console.error('Error connecting to wallet:', error);
      setErrorMessage(
        error.message?.includes('User rejected') 
          ? 'You rejected the connection request. Please try again.'
          : 'Failed to connect to MetaMask. Please check if MetaMask is unlocked and try again.'
      );
      setShowErrorDialog(true);
    }
  }, []);

  const disconnectWallet = useCallback(() => {
    setAddress('');
    setIsConnected(false);
  }, []);

  const closeMetaMaskDialog = useCallback(() => {
    setShowMetaMaskDialog(false);
  }, []);

  const closeErrorDialog = useCallback(() => {
    setShowErrorDialog(false);
    setErrorMessage('');
  }, []);

  return {
    address,
    isConnected,
    showMetaMaskDialog,
    showErrorDialog,
    errorMessage,
    connectWallet,
    disconnectWallet,
    closeMetaMaskDialog,
    closeErrorDialog
  };
}