import { observable } from 'mobx'

class configurationStore {
  constructor(rootStore) {
    this.rootStore = rootStore
  }

  @observable projectPath = 'default value'
}

export default configurationStore
