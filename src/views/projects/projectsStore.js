import { observable } from 'mobx'

class projectStore {
  constructor(rootStore) {
    this.rootStore = rootStore
  }

  @observable projects = 'projects'
}

export default projectStore
