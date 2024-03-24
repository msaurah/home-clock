import { useState } from 'react';
import useSound from 'use-sound';
import lofi from './../assets/sounds/lofi.mp3'
import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai"; // icons for play and pause
import { IconContext } from "react-icons"

/**
 * 0:00 Littleroot Town
 * 2:19 Pokémon League
 * 5:16 Driftveil City
 * 7:27 Twinleaf Town
 * 10:15 Pokémon Lullaby
 * 14:11 Route 201
 * 17:05 Route 10
 * 19:06 New Bark Town
 * 21:27 Route 47
 * 23:42 Verdanturf Town
 * 27:22 Repeat Playlist
 * @returns 
 */

const AudioPlayer = () => {

  const [ isPlaying, setIsPlaying ] = useState(false)
  const [play, { pause, duration, sound }] = useSound(lofi, {
    interrupt: true,
  })

  const playingButton = () => {
    if (isPlaying) {
      pause(); // this will pause the audio
      setIsPlaying(false);
    } else {
      play(); // this will play the audio
      setIsPlaying(true);
    }
  }

  return (
    <div>
      <button className="playButton" onClick={playingButton}>
        <IconContext.Provider value={{ size: "3em", color: "#27AE60" }}>
          {
            isPlaying ? (
              <AiFillPauseCircle />
            ) : (
              <AiFillPlayCircle />
            )
          }
        </IconContext.Provider>
      </button>
    </div>
  );
}
 
export default AudioPlayer;