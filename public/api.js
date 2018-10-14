const { ipcMain } = require('electron')

ipcMain.on('getProjectsList', (event, payload) => {
  console.log('getProjectsList')
  console.log('payload is', payload)
  event.sender.send('setProjectsList', { key: 'valor', anotherkey: 'outrovalor'})
})
