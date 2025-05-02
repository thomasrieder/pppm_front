import myVideo from '../videos/alala_rugg.mp4';
import { useRef, useContext } from 'react';
// import { useState, useContext } from 'react';
import AuthContext from '../AuthProvider';



export function WatchVideo() {
    
    const videoPlayer = useRef(null);
    const { auth } = useContext(AuthContext)
    
    console.log(auth)

    let timer = null,
    totalTime = 0;
    
    // console.log(player)
    let lastPlayerTime = 0;
    
    const videoPlay = () => {
        let player = videoPlayer.current;
        console.log("START");
        timer = window.setInterval(function() {
            if(lastPlayerTime !== player.currentTime) {
                totalTime += 1;
            }
            lastPlayerTime = player.currentTime;
            console.log(totalTime + "s")
            // txtWatchTime.innerHTML = totalTime + "s" + "/" + parseInt(player.duration(), 10) + "s";
        }, 1000);
    }
    
    const videoPause = () => {
        console.log("pause")
        if (timer) clearInterval(timer);
    }

    if (auth.userId) {

        return (
            <>
            <h1>Videos</h1>
            {/* <VideoPlayer {...videoJsOptions} /> */}
            <video 
                ref={videoPlayer}
                onPlay={videoPlay} 
                onPause={videoPause} 
                src={myVideo} 
                controls></video>
            </>
        )
    } else {
        return (
            <>
                <h1>You need to loggin</h1>
            </>
        )
    }
}