import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography } from '@mui/material';

interface MetaMaskDialogProps {
  open: boolean;
  onClose: () => void;
}

function MetaMaskDialog({ open, onClose }: MetaMaskDialogProps) {
  const handleInstall = () => {
    window.open('https://metamask.io/download/', '_blank');
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: 2,
          p: 2,
        },
      }}
    >
      <DialogTitle sx={{ fontSize: 24, fontWeight: 'bold', color: '#0284c7' }}>
        MetaMask Required
      </DialogTitle>
      <DialogContent>
        <Typography variant="body1" sx={{ mb: 2 }}>
          To connect your wallet and access all features, you'll need to install MetaMask - a secure wallet and gateway to blockchain apps.
        </Typography>
        <Typography variant="body2" color="text.secondary">
          MetaMask is a free browser extension that allows you to:
        </Typography>
        <ul style={{ marginTop: 8, marginLeft: 20, color: 'rgba(0, 0, 0, 0.6)' }}>
          <li>Securely store your cryptocurrency</li>
          <li>Connect to blockchain applications</li>
          <li>Make transactions on the Ethereum network</li>
        </ul>
      </DialogContent>
      <DialogActions sx={{ p: 2, pt: 0 }}>
        <Button onClick={onClose} color="inherit">
          Cancel
        </Button>
        <Button
          onClick={handleInstall}
          variant="contained"
          sx={{
            bgcolor: '#0284c7',
            '&:hover': {
              bgcolor: '#0369a1',
            },
          }}
        >
          Install MetaMask
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default MetaMaskDialog;