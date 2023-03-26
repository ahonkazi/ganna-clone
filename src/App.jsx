import React, { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import MusicContainer from './components/MusicContainer/MusicContainer'
import MusicController from './components/MusicController'
import MusicData from './assests/js/ganna.json'
const App = () => {

    const [playlist, setPlaylist] = useState(MusicData.cardbox[1].songscards)
    const [activeSong, setActiveSong] = useState({
        "id": 7,
        "playlist_type": false,
        "playlist": null,
        "song_name": "shape of you",
        "album_name": "shape of you",
        "singers": "",
        "image_source": "assests/images/shape_of_you.jpg",
        "quality": { "low": "assests/songs/shapeofyou.mp3", "medium": "", "high": "" },
        "release_date": "date"
    })
    const [playing, setPlaying] = useState(false)
    const [musicPlayStatus, setMusicPlayStatus] = useState(false)
    return (
        <>
            <Header />
            <MusicContainer setPlaylist={setPlaylist} setMusicPlayStatus={setMusicPlayStatus} getActiveSong={setActiveSong} />
            <MusicController playlist={playlist} setActiveSong={setActiveSong} setPlaylist={setPlaylist} setMusicPlayStatus={setMusicPlayStatus} musicPlayStatus={musicPlayStatus} playing={playing} setPlaying={setPlaying} activeSong={activeSong} />

        </>
    )
}

export default App