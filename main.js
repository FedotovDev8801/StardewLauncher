const { app, BrowserWindow, ipcMain, shell } = require('electron');
const path = require('path');
const { exec } = require('child_process');

function createWindow() {
  const win = new BrowserWindow({
    width: 900,
    height: 700,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  });

  win.loadFile('index.html');
}

app.whenReady().then(createWindow);

ipcMain.handle('launch-game', async (event, platform) => {
  if (platform === 'steam') {
    exec('start steam://rungameid/413150'); // Stardew Valley
  } else if (platform === 'gog') {
    exec('"C:\\Program Files (x86)\\GOG Galaxy\\GalaxyClient.exe" /command=runGame /gameId=1451994881');
  }
});