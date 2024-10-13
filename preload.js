const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electron', {
  minimize: () => ipcRenderer.send('minimize-window'),
  close: () => ipcRenderer.send('close-window')
});
