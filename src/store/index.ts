import { InjectionKey } from 'vue'
import { createStore, Store } from 'vuex'

export interface State {
  username: string,
  terminator: string,
  score: number
}

// define injection key
export const key: InjectionKey<Store<State>> = Symbol()

export default createStore({
  state: {
    username: '',
    terminator: '',
    score: 0
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
