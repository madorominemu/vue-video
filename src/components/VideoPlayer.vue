<template>
	<div class="container" ref="container">
		<div class="header">
			<div class="headerUp">
				<svg t="1681508639334" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5771" id="mx_n_1681508639335" width="18" height="18"><path d="M1006.144 969.984l-154.304-154.304c78.08-86.72 126.208-201.088 126.208-326.656C978.048 219.392 758.656 0 489.024 0S0 219.392 0 489.024s219.392 489.024 489.024 489.024c116.544 0 223.68-41.152 307.712-109.44L952.192 1024 1006.144 969.984zM76.352 488.96c0-227.584 185.152-412.672 412.672-412.672s412.672 185.088 412.672 412.672-185.088 412.672-412.672 412.672S76.352 716.608 76.352 488.96z" fill="#ffffff" p-id="5772"></path></svg>
				<div style="color: #ffffff">直播</div>
			</div>
			<div class="headerDown">
				<div style="flex: auto;color: #ffffff">人才</div>
				<div style="flex: auto;color: #ffffff">雇主</div>
				<div style="flex: auto;color: #dace4a">合伙人</div>
				<div style="flex: auto;color: #ffffff">推荐</div>
				<div style="flex: auto;color: #ffffff">关注</div>
				<div style="height: 18px;width: 34px;border-radius: 9999px;background-color: #1db954">
					<div style="height: 16px;width: 17px;border-radius:9999px;margin-top:1px;margin-left:16px;background-color: #ffffff"></div>
				</div>
			</div>
		</div>
		<div class="list-box" :style="{transform: `translateY(${dragDistance}px)`}" :class="{animateClass: loseDragging}">
			<div class="video-container" v-for="(item,index) in listOfVideos" @click="switchPlay" @touchstart="onDragStart" @touchmove="onDragMove" @touchend="onDragEnd($event,index)">
				<video :src="item.src" class="video" ref="videoPlayer" :autoplay="index === 0 ? true : false" loop @loadedmetadata="onVideoLoaded" @timeupdate="timeupdate"></video>
				<div class="content-box">
					<div class="sideBar" @click.stop>
						<div style="display: flex;align-items:center;justify-content:center;height: 56px;width: 56px;border-radius: 9999px;background-color: #ffffff">
							<img style="height: 52px;width: 52px;border-radius: 9999px" :src="item.href">
							<div style="position:absolute;height: 20px;width: 20px;border-radius: 9999px;background-color: #ff0000;margin-top: 48px">
								<p style="margin-left: 2px;">+</p>
							</div>
						</div>
						<div style="display: flex;flex-direction: column;align-items: center">
							<svg t="1681510680733" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="28604" width="30" height="30"><path d="M736.048379 127.978498c-65.881404 0-128.494541 24.942046-176.314463 70.525785-4.644381 4.300353-28.726356 28.726356-47.30388 47.647909l-47.30388-47.131866c-47.819923-45.755753-110.605073-71.041828-177.00252-71.041828-141.223585 0-255.956996 114.905426-255.956996 255.956996 0 82.394759 41.111372 144.319839 76.546279 182.506971l316.849992 320.11826c25.11406 25.11406 52.980346 41.455401 86.695112 41.455401 33.714766 0 61.581052-16.341341 86.695112-41.455401l316.677977-319.946246 2.236183-2.408198c38.187133-47.647909 74.310096-92.715606 74.310096-180.098774C992.005375 242.883924 877.09995 127.978498 736.048379 127.978498z" fill="#ffffff" p-id="28605"></path></svg>
							<div style="font-size: 10px">{{ item.like }}</div>
						</div>
						<div style="display: flex;flex-direction: column;align-items: center">
							<svg t="1681510722391" class="icon" viewBox="0 0 1025 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="30512" width="30" height="30"><path d="M1024.049737 393.508571a36.571429 36.571429 0 0 0-29.257143-24.868571l-311.588571-44.617143L544.232594 42.422857a37.302857 37.302857 0 0 0-64.365714 0l-138.971429 281.6L30.769737 365.714286a36.571429 36.571429 0 0 0-29.257143 24.868571 36.571429 36.571429 0 0 0 9.508572 36.571429l224.548571 219.428571-53.394286 311.588572a36.571429 36.571429 0 0 0 14.628572 35.108571 35.108571 35.108571 0 0 0 21.211428 6.582857 33.645714 33.645714 0 0 0 16.091429-4.388571l277.942857-146.285715 277.942857 146.285715a34.377143 34.377143 0 0 0 37.302857 0 36.571429 36.571429 0 0 0 14.628572-35.108572l-53.394286-309.394285 224.548572-219.428572a36.571429 36.571429 0 0 0 10.971428-38.034286z" fill="#ffffff" p-id="30513"></path></svg>
							<div style="font-size: 10px">{{ item.like_n }}</div>
						</div>
						<div style="display: flex;flex-direction: column;align-items: center">
							<svg t="1681510752170" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="32413" width="30" height="30"><path d="M512.2 64C265.1 64 64.8 264.3 64.8 511.4s200.3 447.4 447.4 447.4 447.3-200.3 447.3-447.4S759.2 64 512.2 64z m66.6 641.9V573.6S349.5 548.1 215.5 739c0 0 42.2-363.9 363.3-363.9V242.9l231.1 231.5-231.1 231.5z m0 0" p-id="32414" fill="#ffffff"></path></svg>
							<div style="font-size: 10px">{{ item.sms_n }}</div>
						</div>
						<div style="display: flex;flex-direction: column;align-items: center">
							<svg t="1681510785726" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="34603" width="30" height="30"><path d="M823.466667 110.933333H200.533333C136.533333 110.933333 85.333333 162.133333 85.333333 226.133333v452.266667c0 64 51.2 119.466667 115.2 119.466667H298.666667l42.666666 102.4c8.533333 21.333333 38.4 25.6 51.2 4.266666l76.8-106.666666h349.866667c64 0 115.2-51.2 115.2-119.466667V226.133333c4.266667-64-46.933333-115.2-110.933333-115.2z m-554.666667 405.333334c-29.866667 0-51.2-25.6-51.2-55.466667 0-29.866667 25.6-55.466667 51.2-55.466667s51.2 25.6 51.2 55.466667c0 34.133333-21.333333 55.466667-51.2 55.466667z m243.2 0c-29.866667 0-51.2-25.6-51.2-55.466667 0-29.866667 25.6-55.466667 51.2-55.466667s51.2 25.6 51.2 55.466667c0 34.133333-21.333333 55.466667-51.2 55.466667z m243.2 0c-29.866667 0-51.2-25.6-51.2-55.466667 0-29.866667 25.6-55.466667 51.2-55.466667s51.2 25.6 51.2 55.466667c4.266667 34.133333-21.333333 55.466667-51.2 55.466667z" fill="#ffffff" p-id="34604"></path></svg>
							<div style="font-size: 10px">{{ item.playNumber }}</div>
						</div>
						<div style="display: flex;flex-direction: column;align-items: center">
							<svg t="1681510835588" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="38411" width="30" height="30"><path d="M992.896 624.448c0-133.824-131.008-242.368-292.608-242.368-161.6 0-292.608 108.48-292.608 242.368 0 133.952 131.008 242.432 292.608 242.432 37.376 0 73.024-6.016 105.792-16.576l92.224 50.496-24.32-81.344c0.32-0.192 0.704-0.32 1.024-0.512C946.56 774.656 992.896 704.064 992.896 624.448zM594.624 578.688c-21.696 0-39.168-17.6-39.168-39.168 0-21.632 17.472-39.168 39.168-39.168 21.568 0 39.104 17.536 39.104 39.168C633.728 561.088 616.192 578.688 594.624 578.688zM792.64 578.688c-21.632 0-39.104-17.6-39.104-39.168 0-21.632 17.472-39.168 39.104-39.168s39.168 17.536 39.168 39.168C831.808 561.088 814.272 578.688 792.64 578.688z" fill="#ffffff" p-id="38412"></path><path d="M689.984 371.904c4.608 0 9.216 0.064 13.696 0.256-18.304-139.968-161.408-248.96-335.232-248.96-186.24 0-337.28 125.12-337.28 279.36 0 91.776 53.376 173.184 135.872 224.128 0.384 0.192 0.768 0.384 1.152 0.64l-27.968 93.76 106.24-58.24c37.888 12.16 78.912 19.072 121.984 19.072 13.504 0 26.816-0.704 39.936-2.048-7.04-20.8-10.944-42.816-10.944-65.536C397.376 480.384 528.448 371.904 689.984 371.904zM490.24 259.456c24.896 0 45.12 20.224 45.12 45.184 0 24.896-20.224 45.12-45.12 45.12-24.96 0-45.184-20.224-45.184-45.12C445.12 279.68 465.344 259.456 490.24 259.456zM261.952 349.76c-24.896 0-45.12-20.224-45.12-45.12 0-24.96 20.16-45.184 45.12-45.184 24.96 0 45.184 20.224 45.184 45.184C307.136 329.536 286.912 349.76 261.952 349.76z" fill="#ffffff" p-id="38413"></path></svg>
						</div>
					</div>
					<div class="footer">
						<div style="display: flex;align-items: center">
							<svg t="1681508808839" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7601" width="19" height="19"><path d="M865.24 210.043l-0.005-25.768-25.68-2.131c-163.422-13.563-313.236-89.85-314.718-90.612L512 84.91l-12.838 6.623c-1.489 0.769-150.87 77.015-314.717 90.612l-25.68 2.131-0.005 25.768c-0.031 164.221 0 353.89 0 353.885 0 42.448 9.577 87.979 27.694 131.673 17.67 42.613 43.491 83.614 74.67 118.571 32.91 36.896 70.456 66.199 111.597 87.096 44.829 22.77 91.689 34.314 139.278 34.314s94.449-11.545 139.278-34.314c41.141-20.896 78.688-50.199 111.597-87.096 31.18-34.957 57-75.958 74.671-118.571 18.117-43.693 27.694-89.225 27.694-131.668 0.001 0 0.032-189.67 0.001-353.891z m-56 353.886c0 142.973-132.588 315.654-297.24 315.654-164.652 0-297.24-172.682-297.24-315.659 0 0-0.028-170.806-0.004-328.579 81.834-9.797 157.425-32.708 208.375-51.108 41.201-14.879 72.454-28.89 88.87-36.66 16.416 7.77 47.669 21.78 88.87 36.66 50.949 18.4 126.54 41.311 208.374 51.108 0.023 157.773-0.005 328.578-0.005 328.584z" p-id="7602" fill="#ffdd00"></path><path d="M652.04 387.312L462.055 577.297l-90.1-90.05c-10.937-10.932-28.667-10.927-39.598 0.011-10.932 10.938-10.927 28.666 0.011 39.598l129.697 129.627L691.638 426.91c10.935-10.935 10.935-28.663 0-39.598-10.934-10.935-28.664-10.935-39.598 0z" p-id="7603" fill="#ffdd00"></path></svg>
							<p class="username">{{ listOfVideos[index].username }}</p>
						</div>
						<div style="display: flex;align-items: center">
							<svg t="1681509386599" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="26680" width="17" height="17"><path d="M219.428571 73.142857h585.142858a73.142857 73.142857 0 0 1 73.142857 73.142857v731.428572a73.142857 73.142857 0 0 1-73.142857 73.142857H219.428571a73.142857 73.142857 0 0 1-73.142857-73.142857V146.285714a73.142857 73.142857 0 0 1 73.142857-73.142857z m0 73.142857v731.428572h585.142858V146.285714H219.428571z m109.714286 219.428572h365.714286a36.571429 36.571429 0 0 1 0 73.142857h-365.714286a36.571429 36.571429 0 0 1 0-73.142857z m0 219.428571h219.428572a36.571429 36.571429 0 0 1 0 73.142857h-219.428572a36.571429 36.571429 0 0 1 0-73.142857z" fill="#ffffff" p-id="26681"></path></svg>
							<p class="title">{{ listOfVideos[index].title }}</p>
						</div>
						<div style="display: flex;align-items: center">
							<svg t="1681509101430" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="21950" width="17" height="17"><path d="M512.978 12.556a0.956 0.956 0 1 0-1.911 0 0.957 0.957 0 0 0 1.911 0zM511.712 38.034c-218.895 0-397.087 182.99-397.087 407.842 0 273.163 362.508 535.242 377.894 545.664a33.09 33.09 0 0 0 38.384 0c15.39-10.422 377.893-272.5 377.893-545.664 0-224.852-178.19-407.842-397.084-407.842z m0 885.174c-73.295-56.753-330.906-270.845-330.906-477.333 0-188.453 148.905-341.662 330.906-341.662s330.905 153.21 330.905 341.662c0 206.154-257.61 420.58-330.905 477.333z" p-id="21951" fill="#ffffff"></path><path d="M511.712 268.678c-72.024-1.682-137.895 40.41-166.63 106.472-28.736 66.066-14.614 142.95 35.723 194.487 50.335 51.54 126.867 67.476 193.59 40.304 66.727-27.162 110.364-92.024 110.383-164.067 1.01-96.665-76.4-175.93-173.066-177.196z m0 288.213c-45.242 1.692-86.974-24.266-105.47-65.588-18.494-41.323-10.041-89.735 21.354-122.348 31.4-32.612 79.46-42.898 121.455-25.984 41.995 16.913 69.512 57.631 69.542 102.904 0.924 60.062-46.83 109.587-106.881 110.854v0.162z" p-id="21952" fill="#ffffff"></path></svg>
							<p class="msg">{{ listOfVideos[index].msg }}</p>
						</div>
						<div style="display: flex" @touchstart="onProgressDragStart" @touchmove="onProgressDragMove" @touchend="onProgressDragEnd">
							<div class="progressBar">
								<div class="progress" ref="progress">
									<div class="current-progress" ref="currentProgress" :style="{width: curLen+'%'}"></div>
									<div class="idot" ref="idot" :style="{left: curLen+'%'}"></div>
								</div>
							</div>
							<div class="time">{{ nowTime }}</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
  import {mapGetters} from 'vuex';
  import { getVideos } from '../api/index.js'
  export default {
    name: '',
    data() {
      return {
        videos: [],
        currentVideoIndex: 0,
        loseDragging: false,
		isDragging: false,
        dragDistance: 0,
        progressLength: 0,
		curLen: 0,
		nowTime: '00:00',
      };
    },
	created() {
      let json = {"info": "get_video"};
      getVideos(json).then(res => {
        this.$store.commit('setListOfVideos', res.data);
	  }).catch(err => {
        console.log(err);
	  })
    },
	mounted() {
      this.progressLength = this.$refs.progress[this.currentVideoIndex].offsetWidth;
    },
    computed: {
      ...mapGetters([
        'listOfVideos',
        'isPlaying',
        'duration',
        'currentTime',
        'changeTime',
        'title',
        'msg',
        'username'
      ]),
    },
    watch: {
      isPlaying() {
        let videoPlayer = this.$refs.videoPlayer[this.currentVideoIndex];
        if ( this.isPlaying ) {
          videoPlayer.play();
        } else {
          videoPlayer.pause();
        }
      },
      currentTime() {
        this.nowTime = this.formatTime(this.currentTime);
        this.curLen = (this.currentTime / this.duration) * 100;
	  },
	  changeTime() {
        this.$refs.videoPlayer[this.currentVideoIndex].currentTime = this.changeTime;
	  }
    },
    methods: {
      switchPlay() {
        if ( this.isPlaying ) {
          this.$store.commit('setIsPlaying', false);
        } else {
          this.$store.commit('setIsPlaying', true);
        }
      },
      playVideo() {
        this.$store.commit('setIsPlaying', true);
      },
      pauseVideo() {
        this.$store.commit('setIsPlaying', false);
      },
      onVideoLoaded() {
        let videoPlayer = this.$refs.videoPlayer[this.currentVideoIndex];
        this.playVideo();
        this.$store.commit('setUrl', this.currentVideoSrc);
        this.$store.commit('setDuration', videoPlayer.duration);
        this.$store.commit('setTitle', this.title);
        this.$store.commit('setMsg', this.msg);
        this.$store.commit('setUsername', this.username);
      },
      timeupdate(){
        let videoPlayer = this.$refs.videoPlayer[this.currentVideoIndex];
        this.$store.commit('setCurrentTime', videoPlayer.currentTime);
      },
      prevVideoIndex() {
        return (this.currentVideoIndex - 1 + this.listOfVideos.length) % this.listOfVideos.length;
      },
      nextVideoIndex() {
        return (this.currentVideoIndex + 1) % this.listOfVideos.length;
      },
      onDragStart(e) {
        this.loseDragging = false;
        this.dragStartY = e.touches[0].clientY;
        this.dragMoveY = this.dragDistance;
      },
      onDragMove(e) {
        let currentY = e.touches[0].clientY - this.dragStartY;
        this.dragDistance = currentY + this.dragMoveY;
      },
      onDragEnd(e,n) {
        this.loseDragging = true;
        let container = this.$refs.container;
        let effectLength = container.clientHeight * 0.25;
        let dragEndY = e.changedTouches[0].clientY - this.dragStartY;
        if ( Math.abs(dragEndY) < effectLength ) {
          this.dragDistance = this.dragMoveY;
		} else {
          if ( dragEndY < 0 ) {
			if ( this.listOfVideos[n + 1] ) {
			  this.dragDistance = this.dragMoveY - container.clientHeight;
			  this.$refs.videoPlayer[n].pause();
              this.$refs.videoPlayer[n + 1].play();
			  this.currentVideoIndex = this.nextVideoIndex();
			} else {
			  this.dragDistance = this.dragMoveY;
			}
		  } else {
            if ( this.listOfVideos[n - 1] ) {
              this.dragDistance = this.dragMoveY + container.clientHeight;
              this.$refs.videoPlayer[n].pause();
              this.$refs.videoPlayer[n - 1].play();
              this.currentVideoIndex = this.prevVideoIndex();
            } else {
              this.dragDistance = this.dragMoveY;
            }
		  }
		}
      },


	  onProgressDragStart(e) {
        this.dragStartX = e.touches[0].clientX;
        this.isDragging = true;
        console.log(this.progressLength);
	  },
	  onProgressDragMove(e) {
        if ( !this.duration ) {
          return false;
		}
        if ( this.isDragging ) {
          let moveX = e.touches[0].clientX - this.dragStartX;
          let curLength = this.$refs.currentProgress[this.currentVideoIndex].offsetWidth;
          let newPercent = ( (moveX + curLength) / this.progressLength ) * 100;
          if ( newPercent > 100 ) {
            newPercent = 100;
		  }
          this.curLen = newPercent;
          this.dragStartX = e.touches[0].clientX;

          let newCurTime = (newPercent * 0.01) * this.duration;
          this.$store.commit('setChangeTime', newCurTime);
          // this.changeTime(newPercent);
		}
	  },
      onProgressDragEnd(e) {
        this.isDragging = false;
	  },
      // changeTime(percent) {
      //   let newCurTime = (percent * 0.01) * this.duration;
      //   this.$store.commit('setChangeTime', newCurTime);
      // },
      formatTime() {
        let time = this.currentTime;
        return (Math.floor(time / 60) + "").padStart(2,"0")+":"+(Math.floor(time % 60) +"").padStart(2, "0");
      }
    }
  }
</script>

<style scoped>
.container {
	width: 100%;
	height: 100vh;
    overflow: hidden;
}
.animateClass {
	transition: transform 0.3s;
}
.video-container {
	position: relative;
	width: 100%;
	height: 100vh;
}
video {
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	z-index: 10;
	background: #000;
}
.content-box {
	position: absolute;
	width: 100%;
	height: 100%;
    top: 0;
    left: 0;
	z-index: 20;
	background: rgba(0, 0, 0, 0);
}
.header {
    position: absolute;
	display: flex;
	flex-direction: column;
	width: calc(100% - 24px);
	gap: 10px;
	top: 0;
	padding-top: 20px;
	padding-left: 12px;
	padding-right: 12px;
	z-index: 20;
}
.headerUp {
	align-items: center;
    display: flex;
	gap: 20px;

}
.headerDown {
	display: flex;
	align-items: center;
}
.sideBar {
	position: absolute;
	right: 0;
	display: flex;
	flex-direction: column;
	align-items: center;
	color: #ffffff;
	gap: 10px;
	top: calc(50% - 160px);
}
.footer {
	width: calc(100% - 16px);
	position: absolute;
	display: flex;
	flex: auto;
	flex-direction: column;
	padding: 8px;
	bottom: 0;
	gap: 10px;
}
.username {
    color: #ffdd00;
    font-size: 15px;
	margin-left: 10px;
}
.title {
	color: #ffffff;
	font-size: 14px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-left: 10px;
}
.msg {
    color: #ffffff;
	font-size: 13px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-left: 10px;
}
.progressBar {
	width: 100%;
	height: 12px;
	margin-top: 4px;
	padding-right: 8px;
}
.progress {
	width: 100%;
	position: relative;
	display: flex;
	align-items: center;
	border-radius: 9999px;
	background-color: #5e5e5e;
	margin-top: 4px;
}
.current-progress {
	height: 4px;
	border-radius: 9999px;
	background-color: #1DB954;
}
.idot {
	position: absolute;
	height: 12px;
	width: 12px;
	background-color: #ffffff;
	border-radius: 9999px;
}
.time {
	min-width: 42px;
	max-width: 44px;
    color: #ffffff;
    font-size: 16px;
}
</style>