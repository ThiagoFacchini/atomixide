const electron = require("electron");

const app = electron.app
const BrowserWindow = electron.BrowserWindow

require('./api')

const isDev = require("electron-is-dev")
const path = require("path")

let mainWindow;

function createWindow() {
  const { width, height } = electron.screen.getPrimaryDisplay().workAreaSize
  console.log(`width is ${width} and height is ${height}`)

  mainWindow = new BrowserWindow({
    width: width,
    height: height,
    webPreferences: {
      webSecurity: false
    }
  })

  mainWindow.loadURL(isDev ? "http://localhost:3000" : `file://${path.join(__dirname, '../build/index.html')}`)

  if (isDev) {
    mainWindow.webContents.openDevTools()
  }

  app.setAboutPanelOptions({
    applicationName: 'Atomix Ide',
    applicationVersion: '0.0.1',
  })

  mainWindow.on('closed', () => mainWindow = null);
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
});
