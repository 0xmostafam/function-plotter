const { app, BrowserWindow, ipcMain } = require('electron');

let win;
const createWindow = () => {
    win = new BrowserWindow({
        width: 1000,
        height: 600,
        webPreferences: {
            preload: `${__dirname}/preload.js`
        }
    });

    win.loadFile('index.html');
}

app.whenReady().then(() => {
    createWindow();
})