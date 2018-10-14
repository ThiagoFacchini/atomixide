import configurationStore from './configurations/configurationsStore'
import projectsStore from './projects/projectsStore'

class rootStore {
  constructor() {
    this.configurationStore = new configurationStore(this)
    this.projectsStore = new projectsStore(this)
  }
}

const stores = window.stores = new rootStore()

export default stores
