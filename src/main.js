const { app, BrowserWindow } = require("electron");

let win;
const createWindow = () => {
	win = new BrowserWindow({
		width: 1000,
		height: 600,
	});
	win.setMenuBarVisibility(false);
	win.loadFile("index.html");
};

app.whenReady().then(() => {
	createWindow();
});
