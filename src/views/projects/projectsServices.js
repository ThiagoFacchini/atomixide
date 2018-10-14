import stores from './../stores'

const electron = window.require('electron')

electron.ipcRenderer.on('setProjectsList', (event, payload) => {
  console.log('picked')
  setProjectsList(payload)
})


function getProjectsList() {
  electron.ipcRenderer.send('getProjectsList', { key: 'value', anotherkey: 'anothervalue'})
}

function setProjectsList(projects) {
    stores.projectsStore.projects = projects.key
}

export default {
  getProjectsList: getProjectsList
}
