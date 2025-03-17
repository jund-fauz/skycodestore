import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography, Alert } from '@mui/material';
import { ExclamationCircleIcon } from '@heroicons/react/24/outline';

interface MetaMaskErrorDialogProps {
  open: boolean;
  onClose: () => void;
  error: string;
}

function MetaMaskErrorDialog({ open, onClose, error }: MetaMaskErrorDialogProps) {
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
      <DialogTitle sx={{ 
        fontSize: 24, 
        fontWeight: 'bold', 
        color: '#dc2626',
        display: 'flex',
        alignItems: 'center',
        gap: 1
      }}>
        <ExclamationCircleIcon className="h-6 w-6" />
        Connection Failed
      </DialogTitle>
      <DialogContent>
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
        <Typography variant="body1" sx={{ mb: 2 }}>
          There was an error while trying to connect to MetaMask. This might happen due to:
        </Typography>
        <ul style={{ marginLeft: 20, color: 'rgba(0, 0, 0, 0.6)' }}>
          <li>User rejected the connection request</li>
          <li>Network connection issues</li>
          <li>MetaMask is locked</li>
          <li>Browser permissions are blocked</li>
        </ul>
      </DialogContent>
      <DialogActions sx={{ p: 2, pt: 0 }}>
        <Button
          onClick={onClose}
          variant="contained"
          sx={{
            bgcolor: '#0284c7',
            '&:hover': {
              bgcolor: '#0369a1',
            },
          }}
        >
          Try Again
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default MetaMaskErrorDialog;