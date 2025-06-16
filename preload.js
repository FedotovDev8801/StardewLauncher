const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('api', {
  launchGame: (platform) => ipcRenderer.invoke('launch-game', platform),
});