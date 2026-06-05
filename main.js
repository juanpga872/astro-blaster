const { app, BrowserWindow } = require('electron')

function createWindow() {
  const win = new BrowserWindow({ width: 720, height: 520 })
  win.loadFile('index.html')
}

app.whenReady().then(createWindow)