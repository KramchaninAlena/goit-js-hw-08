import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const STORAGE_KEY = 'videoplayer-current-time';
const player = new Player('vimeo-player');
const currentTime = localStorage.getItem(STORAGE_KEY) ?? 0;

player.setCurrentTime(currentTime);
console.log(currentTime);

player.on('timeupdate', throttle(function(data) {
    localStorage.setItem(STORAGE_KEY, data.seconds)
}, 1000));