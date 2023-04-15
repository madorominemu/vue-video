const video = {
  state: {
    listOfVideos: [],
    isPlaying: true,
    url: '',
    duration: 0,
    currentTime: 0,
    changeTime: 0,
    title: '',
    msg: '',
    username: '',
  },
  getters: {
    listOfVideos: state => {
      let listOfVideos = state.listOfVideos
      if(!listOfVideos.length){
        listOfVideos = JSON.parse(window.sessionStorage.getItem('listOfVideos')||null)
      }
      return listOfVideos
    },
    currentVideoIndex: state => {
      let currentVideoIndex = state.currentVideoIndex
      if (!currentVideoIndex) {
        currentVideoIndex = JSON.parse(window.sessionStorage.getItem('currentVideoIndex') || null)
      }
      return currentVideoIndex
    },
    isPlaying: state => {
      let isPlaying = state.isPlaying
      if (!isPlaying) {
        isPlaying = JSON.parse(window.sessionStorage.getItem('isPlaying') || null)
      }
      return isPlaying
    },
    url: state => {
      let url = state.url
      if (!url) {
        url = JSON.parse(window.sessionStorage.getItem('url') || null)
      }
      return url
    },
    duration: state => {
      let duration = state.duration
      if (!duration) {
        duration = JSON.parse(window.sessionStorage.getItem('duration') || 0)
      }
      return duration
    },
    currentTime: state => {
      let currentTime = state.currentTime
      if (!currentTime) {
        currentTime = JSON.parse(window.sessionStorage.getItem('currentTime') || 0)
      }
      return currentTime
    },
    changeTime: state => {
      let changeTime = state.changeTime
      if (!changeTime) {
        changeTime = JSON.parse(window.sessionStorage.getItem('changeTime') || 0)
      }
      return changeTime
    },
    title: state => {
      let title = state.title
      if (!title) {
        title = JSON.parse(window.sessionStorage.getItem('title') || null)
      }
      return title
    },
    msg: state => {
      let msg = state.msg
      if (!msg) {
        msg = JSON.parse(window.sessionStorage.getItem('msg') || null)
      }
      return msg
    },
    username: state => {
      let username = state.username
      if (!username) {
        username = JSON.parse(window.sessionStorage.getItem('username') || null)
      }
      return username
    },
  },
  mutations: {
    setListOfVideos: (state,listOfVideos) => {
      state.listOfVideos = listOfVideos
      window.sessionStorage.setItem('listOfVideos',JSON.stringify(listOfVideos))
    },
    setCurrentVideoIndex: (state, currentVideoIndex) => {
      state.currentVideoIndex = currentVideoIndex
      window.sessionStorage.setItem('currentVideoIndex', JSON.stringify(currentVideoIndex))
    },
    setIsPlaying: (state, isPlaying) => {
      state.isPlaying = isPlaying
      window.sessionStorage.setItem('isPlaying', JSON.stringify(isPlaying))
    },
    setUrl: (state, url) => {
      state.url = url
      window.sessionStorage.setItem('url', JSON.stringify(url))
    },
    setDuration: (state, duration) => {
      state.duration = duration
      window.sessionStorage.setItem('duration', JSON.stringify(duration))
    },
    setCurrentTime: (state, currentTime) => {
      state.currentTime = currentTime
      window.sessionStorage.setItem('currentTime', JSON.stringify(currentTime))
    },
    setChangeTime: (state, changeTime) => {
      state.changeTime = changeTime
      window.sessionStorage.setItem('changeTime', JSON.stringify(changeTime))
    },
    setTitle: (state, title) => {
      state.title = title
      window.sessionStorage.setItem('title', JSON.stringify(title))
    },
    setMsg: (state, msg) => {
      state.msg = msg
      window.sessionStorage.setItem('msg', JSON.stringify(msg))
    },
    setUsername: (state, username) => {
      state.username = username
      window.sessionStorage.setItem('username', JSON.stringify(username))
    }
  }
}

export default video
