import Player from "@vimeo/player";
import { throttle } from "lodash";


const iframe = document.querySelector('iframe');
    const player = new Player(iframe);
    const STORAGE_KEY = "videoplayer-current-time";

    player.on('timeupdate',throttle(onTimeUpdatingSave, 1000));

    function onTimeUpdatingSave(timeupdate) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(timeupdate));
    }

    const savedMessage = localStorage.getItem(STORAGE_KEY);
    
    if(savedMessage){
    const parsedMessage = JSON.parse(savedMessage);
    player.setCurrentTime(parsedMessage.seconds).then(function(seconds) {
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            break;

        default:
            break;
    }
});
}
