import { createStore } from 'vuex';
import video from './video'

const store = createStore({
  modules: {
    video
  }
})

export default store