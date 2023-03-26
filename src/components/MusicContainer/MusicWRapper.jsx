import React, { useState } from 'react'
import MusicItem from './MusicItem'
const MusicWRapper = ({ cardData, getActiveSongFromMusicWrapper, setMusicPlayStatus, setPlaylist }) => {
    return (
        <div className="music-wrapper mb-16">
            <div className="music__wrapper-header flex justify-between items-center">
                <p className='uppercase text-base font-medium text-slate-400'>{cardData.songsbox}</p>
                <a href="#" className='text-base text-slate-400 flex items-center ' >
                    <span className='hover:underline border-slate-500'>View All</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className='mt-1' id="Outline" viewBox="0 0 24 24" width="18" height="18"><path fill="currentColor" d="M15.4,9.88,10.81,5.29a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42L14,11.29a1,1,0,0,1,0,1.42L9.4,17.29a1,1,0,0,0,1.41,1.42l4.59-4.59A3,3,0,0,0,15.4,9.88Z" /></svg>

                </a>
            </div>

            <div className="wrapper relative  px-8 ">
                <div className="music-item-wrapper py-4 mt-16 flex items-center gap-2 overflow-x-auto">


                    {
                        cardData.songscards.map(song => <MusicItem setPlaylist={setPlaylist} setMusicPlayStatus={setMusicPlayStatus} getActiveSongFromMusicItem={getActiveSongFromMusicWrapper} songData={song} />)
                    }


                </div>
                <div className="slider-controls pb-8 absolute w-full pointer-events-none top-0 left-0 h-full flex items-center justify-between">
                    <button className='text-3xl text-white pointer-events-auto h-full duration-500 hover:bg-black hover:bg-opacity-25 px-4'>
                        <svg className='' xmlns="http://www.w3.org/2000/svg" id="Bold" viewBox="0 0 24 24" width="28" height="28"><path fill="currentColor" d="M12,24a1.493,1.493,0,0,1-1.06-.439L3.264,15.889a5.5,5.5,0,0,1,0-7.778L10.936.439a1.5,1.5,0,1,1,2.121,2.122L5.385,10.232a2.5,2.5,0,0,0,0,3.536l7.672,7.671A1.5,1.5,0,0,1,12,24Z" /><path fill="currentColor" d="M21.542,24a1.5,1.5,0,0,1-1.061-.439L11.4,14.475a3.505,3.505,0,0,1,0-4.95L20.481.439A1.5,1.5,0,0,1,22.6,2.561l-9.086,9.085a.5.5,0,0,0,0,.708L22.6,21.439A1.5,1.5,0,0,1,21.542,24Z" /></svg>

                    </button>
                    <button className='text-3xl text-white h-full pointer-events-auto duration-500 hover:bg-black hover:bg-opacity-25 px-4'>
                        <svg className='rotate-180' xmlns="http://www.w3.org/2000/svg" id="Bold" viewBox="0 0 24 24" width="28" height="28"><path fill="currentColor" d="M12,24a1.493,1.493,0,0,1-1.06-.439L3.264,15.889a5.5,5.5,0,0,1,0-7.778L10.936.439a1.5,1.5,0,1,1,2.121,2.122L5.385,10.232a2.5,2.5,0,0,0,0,3.536l7.672,7.671A1.5,1.5,0,0,1,12,24Z" /><path fill="currentColor" d="M21.542,24a1.5,1.5,0,0,1-1.061-.439L11.4,14.475a3.505,3.505,0,0,1,0-4.95L20.481.439A1.5,1.5,0,0,1,22.6,2.561l-9.086,9.085a.5.5,0,0,0,0,.708L22.6,21.439A1.5,1.5,0,0,1,21.542,24Z" /></svg>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default MusicWRapper