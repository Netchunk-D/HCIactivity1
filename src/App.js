import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Tooltip,
  Snackbar,
  Switch,
  Button,
  Menu,
  MenuItem,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Fab,
  Box,
  Divider,
} from '@mui/material';
import {
  Save as SaveIcon,
  Undo as UndoIcon,
  Redo as RedoIcon,
  ContentCut as CutIcon,
  ContentCopy as CopyIcon,
  ContentPaste as PasteIcon,
  FormatBold as BoldIcon,
  FormatItalic as ItalicIcon,
  FormatUnderlined as UnderlineIcon,
  Print as PrintIcon,
  Pageview as PageviewIcon,
  Spellcheck as SpellcheckIcon,
  FindReplace as FindReplaceIcon,
} from '@mui/icons-material';
import { ThemeProvider, createTheme } from '@mui/material/styles';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [anchorEl, setAnchorEl] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);

  // Theme Configuration
  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      background: {
        default: darkMode ? '#121212' : '#fff',
      },
      text: {
        primary: darkMode ? '#fff' : '#000',
      },
    },
  });

  // Theme Toggle
  const handleThemeChange = () => {
    setDarkMode(!darkMode);
  };

  // Snackbar Handler
  const handleSnackbarOpen = (message) => {
    setSnackbarMessage(message);
  };

  const handleSnackbarClose = () => {
    setSnackbarMessage('');
  };

  // Menu Handlers
  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  // Dialog Handlers
  const handleDialogOpen = () => {
    setOpenDialog(true);
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        {/* App Bar with Functionalities */}
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" style={{ flexGrow: 1 }}>
              Word Processor
            </Typography>
            <Divider orientation="vertical" flexItem style={{ margin: '0 10px' }} />
            <Button
              color="inherit"
              onClick={() => handleSnackbarOpen('New File Created')}
              style={{ margin: '0 5px' }}
            >
              New
            </Button>
            <Button
              color="inherit"
              onClick={handleMenuClick}
              style={{ margin: '0 5px' }}
            >
              Open
            </Button>
            <Button
              color="inherit"
              onClick={() => handleSnackbarOpen('File Saved')}
              style={{ margin: '0 5px' }}
            >
              Save
            </Button>
            <Button
              color="inherit"
              onClick={() => handleSnackbarOpen('Save As...')}
              style={{ margin: '0 5px' }}
            >
              Save As
            </Button>
            <Button
              color="inherit"
              onClick={() => handleSnackbarOpen('File Closed')}
              style={{ margin: '0 5px' }}
            >
              Close
            </Button>
            <Button
              color="inherit"
              onClick={handleDialogOpen}
              style={{ margin: '0 5px' }}
            >
              Quit
            </Button>
            <Divider orientation="vertical" flexItem style={{ margin: '0 10px' }} />
            <Tooltip title="Undo">
              <IconButton
                onClick={() => handleSnackbarOpen('Undo Action')}
                style={{ color: 'inherit' }}
              >
                <UndoIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Redo">
              <IconButton
                onClick={() => handleSnackbarOpen('Redo Action')}
                style={{ color: 'inherit' }}
              >
                <RedoIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Cut">
              <IconButton
                onClick={() => handleSnackbarOpen('Text Cut')}
                style={{ color: 'inherit' }}
              >
                <CutIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Copy">
              <IconButton
                onClick={() => handleSnackbarOpen('Text Copied')}
                style={{ color: 'inherit' }}
              >
                <CopyIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Paste">
              <IconButton
                onClick={() => handleSnackbarOpen('Text Pasted')}
                style={{ color: 'inherit' }}
              >
                <PasteIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Bold">
              <IconButton
                onClick={() => handleSnackbarOpen('Bold Text')}
                style={{ color: 'inherit' }}
              >
                <BoldIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Italic">
              <IconButton
                onClick={() => handleSnackbarOpen('Italic Text')}
                style={{ color: 'inherit' }}
              >
                <ItalicIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Underline">
              <IconButton
                onClick={() => handleSnackbarOpen('Underline Text')}
                style={{ color: 'inherit' }}
              >
                <UnderlineIcon />
              </IconButton>
            </Tooltip>
            <Button
              color="inherit"
              onClick={() => handleSnackbarOpen('Increase Font Size')}
              style={{ margin: '0 5px' }}
            >
              A+
            </Button>
            <Button
              color="inherit"
              onClick={() => handleSnackbarOpen('Decrease Font Size')}
              style={{ margin: '0 5px' }}
            >
              A-
            </Button>

            {/* Box to push the Switch to the right */}
            <Box sx={{ flexGrow: 1 }} />
            <Tooltip title="Toggle Dark Mode">
              <Switch
                checked={darkMode}
                onChange={handleThemeChange}
                color="default"
              />
            </Tooltip>
          </Toolbar>
        </AppBar>

        {/* Main Text Area */}
        <main style={{ padding: '20px' }}>
          <TextField
            fullWidth
            multiline
            rows={20}
            variant="outlined"
            placeholder="Start typing here..."
            InputProps={{
              style: {
                backgroundColor: darkMode ? '#333' : '#fff',
                color: darkMode ? '#fff' : '#000',
              },
            }}
          />
        </main>

        {/* Floating Action Button for Save */}
        <Fab
          color="primary"
          aria-label="save"
          style={{ position: 'fixed', bottom: '20px', right: '20px' }}
          onClick={() => handleSnackbarOpen('File Saved via FAB')}
        >
          <SaveIcon />
        </Fab>

        {/* Snackbar Notifications */}
        <Snackbar
          open={Boolean(snackbarMessage)}
          autoHideDuration={3000}
          onClose={handleSnackbarClose}
          message={snackbarMessage}
        />

        {/* File Open Menu */}
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={() => handleSnackbarOpen('File 1 Opened')}>Open File 1</MenuItem>
          <MenuItem onClick={() => handleSnackbarOpen('File 2 Opened')}>Open File 2</MenuItem>
          <MenuItem onClick={() => handleSnackbarOpen('File 3 Opened')}>Open File 3</MenuItem>
        </Menu>

        {/* Dialog for Quit Confirmation */}
        <Dialog open={openDialog} onClose={handleDialogClose}>
          <DialogTitle>Quit Application</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Are you sure you want to quit without saving your changes?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleDialogClose} color="primary">Cancel</Button>
            <Button onClick={handleDialogClose} color="primary">Confirm</Button>
          </DialogActions>
        </Dialog>
      </div>
    </ThemeProvider>
  );
}

export default App;
