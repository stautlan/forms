import { useRef } from 'react'
//import {} from '../video/welcome_to_hell.mp4'

/*type Props = {}

const VideoPlayer = (props: Props) => {
  return (
    <div>VideoPlayer</div>
  )
}*/

function VideoPlayer() {
    const videoRef = useRef<HTMLVideoElement>();
    const filename = "./welcome_to_hell.mp4";
    const play = () => {
        // теперь вместо
        //document.querySelector('video').play()
        // можем использовать React
        videoRef.current?.play();
    }
    const pause = () => {
        videoRef.current?.pause();
    }

    return (
        <>
            <video ref={videoRef} width="320" height="240">
                <source src={filename} type='video/mp4' />
            </video>
            <hr />
            <button onClick={play}>Play</button>
            <button onClick={pause}>Pause</button>
        </>
    )
}

export default VideoPlayer