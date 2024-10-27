const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

async function createWindow() {
  const isDev = await import('electron-is-dev').then(module => module.default);
  
  const mainWindow  = new BrowserWindow({
    width: 800,
    height: 600,
    frame: false,  // elimina la barra de navegación
    icon: path.join(__dirname, 'src/assets/img/logo192.jpg'), // icono
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: false,
      contextIsolation: true,
      enableRemoteModule: false, 
    }
  });

  const startUrl = isDev
    ? 'http://localhost:3000'
    : `file://${path.join(__dirname, 'build', 'index.html').replace(/\\/g, '/')}`;

  mainWindow.loadURL(startUrl);

  if (isDev) {
    mainWindow.webContents.openDevTools();
  }

  ipcMain.on('minimize-window', () => {
    mainWindow.minimize();
  });

  ipcMain.on('close-window', () => {
    mainWindow.close();
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
