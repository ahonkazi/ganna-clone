import React from 'react'

const MusicItem = ({ songData, getActiveSongFromMusicItem, setMusicPlayStatus, setPlaylist }) => {
    return (
        <div className="music-item min-w-[150px] text-center cursor-pointer">
            <div className="group relative ">
                <img className='w-32 rounded-md mx-auto' src={`./${songData.image_source}`} alt="" />
                <div className="overlay group-hover:opacity-100 opacity-0 duration-500 group-hover:pointer-events-auto pointer-events-none w-full absolute top-0 left-0 bg-slate-900 bg-opacity-40 h-full flex justify-center items-center">
                    <button onClick={() => { setPlaylist(p => [...new Set([...p, songData])]); getActiveSongFromMusicItem(songData); setMusicPlayStatus(false); setTimeout(() => setMusicPlayStatus(true), 10) }} className='mb-2 w-16 rounded-full h-16 flex justify-center items-center bg-black'>
                        <svg xmlns="http://www.w3.org/2000/svg" id="Filled" viewBox="0 0 24 24" width="33" height="33"><path fill="white" d="M20.492,7.969,10.954.975A5,5,0,0,0,3,5.005V19a4.994,4.994,0,0,0,7.954,4.03l9.538-6.994a5,5,0,0,0,0-8.062Z" /></svg>
                    </button>
                </div>
            </div>
            <p className='text-slate-400 mt-1'>{songData.song_name}</p>

        </div>)
}

export default MusicItem