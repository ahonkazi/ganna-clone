import React, { useState } from 'react'
import PlayList from './PlayList'

const MusicController = ({ activeSong, setActiveSong, setPlaying, playing, musicPlayStatus, setMusicPlayStatus, playlist, setPlaylist }) => {

    const [openSoundPlate, setSoundPlate] = useState(false)
    const [openMorePlate, setOpenMorePlate] = useState(false)
    const [openQualityPlate, setOpenQualityPlate] = useState(false)
    const [currentPlay, setCurrentPlay] = useState(0)
    const [activeQueue, setActiveQueue] = useState(false)
    const play = () => {
        const audio = document.querySelector('audio')
        audio.play()
        setPlaying(true)
        setMusicPlayStatus(true)
    }
    const pause = () => {
        const audio = document.querySelector('audio')
        setPlaying(false)
        setMusicPlayStatus(false)
        audio.pause()

    }
    if (musicPlayStatus) {
        play()
    }
    // console.log(currentPlay)
    return (
        <section className='fixed bottom-0 z-20 left-0 w-full'>
            <div className="relative">
                <div className={`playlist -z-10 bottom-full ${activeQueue ? 'translate-y-0' : 'translate-y-full'} duration-500 left-1/2 -translate-x-1/2 w-[95%] md:w-[800px] rounded-t-md h-[40vh] md:h-[60vh] bg-slate-900 absolute`}>
                    <div onClick={() => setActiveQueue(!activeQueue)} className="button-play-list bottom-full left-1/2 -translate-x-1/2 absolute">
                        <button className='px-5 flex items-center gap-3 rounded-t-md text-sm  py-1 bg-slate-800 text-slate-400'>
                            <span>{activeQueue ? 'Close Queue' : 'Open Queue'}</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className={`mt-1 duration-150 ${activeQueue ? '' : 'rotate-[180deg]'}`} viewBox="0 0 24 24" width="12" height="12"><path fill="currentColor" d="M1.51,6.079a1.492,1.492,0,0,1,1.06.44l7.673,7.672a2.5,2.5,0,0,0,3.536,0L21.44,6.529A1.5,1.5,0,1,1,23.561,8.65L15.9,16.312a5.505,5.505,0,0,1-7.778,0L.449,8.64A1.5,1.5,0,0,1,1.51,6.079Z" /></svg>

                        </button>
                    </div>
                    <div className='h-full'>
                        <div className="playlist-header flex justify-between items-center px-4 py-4 bg-slate-800 select-none">
                            <div className="flex items-center gap-5">
                                <img className='w-8' src="https://ahon-ganna.netlify.app/assests/images/album.png" alt="" />
                                <p className='text-slate-400 text-base'>Queue</p>
                            </div>

                            <div className="flex items-center gap-4">
                                <button className='text-sm  px-4 py-1.5 font-OpenSans rounded-2xl  bg-red-600 uppercase font-medium text-white duration-500 border outline-none border-red-600'>Save As Plalist</button>
                                <button onClick={(e) => setPlaylist([])} className='text-sm  px-4 py-1.5 font-OpenSans rounded-2xl  hover:bg-red-600 uppercase font-medium hover:text-white duration-500 border bg-transparent text-red-600 outline-none border-red-600'>Clear Queue</button>

                            </div>
                        </div>
                        <ul className='flex flex-col h-full overflow-y-auto text-slate-400 text-sm font-normal gap-2 bg-slate-900 mr-4 rounded-md py-4 px-2'>
                            {
                                [...new Set(playlist)].map(item =>

                                    <PlayList setMusicPlayStatus={setMusicPlayStatus} setActiveSong={setActiveSong} item={item} />
                                )
                            }

                        </ul>
                    </div>
                </div>



                <audio onTimeUpdate={(e) => setCurrentPlay((100 / e.target.duration) * e.target.currentTime)} src={activeSong.quality.low === "" ? '/assests/songs/ikvaariaa.mp3' : activeSong.quality.low}></audio>
                <div className="gap-4 flex-wrap flex items-center justify-between py-3 bg-slate-800 px-2">
                    <div className="music__controller-info flex items-center gap-2 w-[200px]">
                        <img className='w-10 rounded' src={activeSong.image_source} alt="" />
                        <div className="">
                            <p className='text-sm text-slate-400'>{activeSong.song_name}</p>
                            <p className='text-sm text-slate-500'>{activeSong.album_name ? activeSong.album_name : ''}</p>
                        </div>
                    </div>
                    <div className="flex items-center flex-wrap gap-8">
                        <div className="music-range flex items-center w-[300px] sm:w-[350px]">
                            <input type="range" onChange={(e) => document.querySelector('audio').currentTime = (document.querySelector('audio').duration / 100 * e.target.value)} value={currentPlay} className='w-full range bg-slate-500 h-1 cursor-pointer' />
                        </div>
                        <div className="h-full">
                            <div className={`sound-range relative`}>
                                <button onClick={() => setSoundPlate(!openSoundPlate)} className='text-slate-500 cursor-pointer'>
                                    <svg xmlns="http://www.w3.org/2000/svg" id="Filled" viewBox="0 0 24 24" width="18" height="18"><path fill="currentColor" d="M20.8,4.293A1,1,0,0,0,19.39,5.707a8.911,8.911,0,0,1,0,12.586A1,1,0,1,0,20.8,19.707,10.911,10.911,0,0,0,20.8,4.293Z" /><path fill="currentColor" d="M18.093,7.293a1,1,0,1,0-1.414,1.414,4.664,4.664,0,0,1,0,6.586,1,1,0,1,0,1.414,1.414A6.665,6.665,0,0,0,18.093,7.293Z" /><path fill="currentColor" d="M13.819.207A12.055,12.055,0,0,0,6.268,5H5a5.006,5.006,0,0,0-5,5v4a5.006,5.006,0,0,0,5,5H6.269a12.051,12.051,0,0,0,7.55,4.793A1,1,0,0,0,15,22.81V1.19A1,1,0,0,0,13.819.207Z" /></svg>
                                </button>
                                <div className={` duration-150  ${openSoundPlate ? 'scale-100 opacity-100 pointer-events-auto' : 'opacity-0 scale-75 pointer-events-none'} absolute bottom-[120px] left-1/2 -translate-x-1/2 shadow-xl rounded-md bg-slate-700 rotate-[270deg] p-4 flex items-center justify-center`}>
                                    <input type="range" onChange={(e) => document.querySelector('audio').volume = e.target.value / 100} className='w-[150px] cursor-pointer range bg-slate-500 h-1' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="playPause flex items-center gap-4 px-8">
                        <button className='text-slate-500 cursor-pointer'>
                            <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" className='rotate-180' data-name="Layer 1" viewBox="0 0 24 24" width="18" height="18"><path fill="currentColor" d="M22.5,21c-.828,0-1.5-.671-1.5-1.5V4.5c0-.829,.672-1.5,1.5-1.5s1.5,.671,1.5,1.5v15c0,.829-.672,1.5-1.5,1.5Zm-5,0c-.828,0-1.5-.671-1.5-1.5V4.5c0-.829,.672-1.5,1.5-1.5s1.5,.671,1.5,1.5v15c0,.829-.672,1.5-1.5,1.5Zm-13.874-.421c-.559,0-1.12-.13-1.641-.394-1.225-.621-1.985-1.859-1.985-3.232V7.047c0-1.373,.761-2.611,1.985-3.231,1.209-.614,2.687-.494,3.781,.311l6.754,4.953c.94,.689,1.48,1.754,1.48,2.921s-.54,2.232-1.481,2.922l-6.754,4.953c-.635,.467-1.384,.705-2.139,.705Zm.003-14.161c-.096,0-.193,.024-.289,.073-.223,.113-.341,.305-.341,.556v9.906c0,.25,.118,.442,.341,.556,.224,.113,.448,.095,.649-.053l6.755-4.954c.167-.122,.254-.295,.254-.502s-.088-.38-.254-.502L3.991,6.544c-.115-.084-.236-.126-.361-.126Z" /></svg>
                        </button>
                        {
                            playing ?
                                <button onClick={() => pause()} className='text-red-500 cursor-pointer'>
                                    <svg xmlns="http://www.w3.org/2000/svg" id="Filled" viewBox="0 0 24 24" width="23" height="23"><path fill="currentColor" d="M6.5,0A3.5,3.5,0,0,0,3,3.5v17a3.5,3.5,0,0,0,7,0V3.5A3.5,3.5,0,0,0,6.5,0Z" /><path fill="currentColor" d="M17.5,0A3.5,3.5,0,0,0,14,3.5v17a3.5,3.5,0,0,0,7,0V3.5A3.5,3.5,0,0,0,17.5,0Z" /></svg>
                                </button>
                                :
                                <button onClick={() => play()} className='text-red-500 cursor-pointer'>
                                    <svg xmlns="http://www.w3.org/2000/svg" id="Filled" viewBox="0 0 24 24" width="23" height="23"><path fill="currentColor" d="M20.492,7.969,10.954.975A5,5,0,0,0,3,5.005V19a4.994,4.994,0,0,0,7.954,4.03l9.538-6.994a5,5,0,0,0,0-8.062Z" /></svg>
                                </button>
                        }
                        <button className='text-slate-500 cursor-pointer'>
                            <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="18" height="18"><path fill="currentColor" d="M22.5,21c-.828,0-1.5-.671-1.5-1.5V4.5c0-.829,.672-1.5,1.5-1.5s1.5,.671,1.5,1.5v15c0,.829-.672,1.5-1.5,1.5Zm-5,0c-.828,0-1.5-.671-1.5-1.5V4.5c0-.829,.672-1.5,1.5-1.5s1.5,.671,1.5,1.5v15c0,.829-.672,1.5-1.5,1.5Zm-13.874-.421c-.559,0-1.12-.13-1.641-.394-1.225-.621-1.985-1.859-1.985-3.232V7.047c0-1.373,.761-2.611,1.985-3.231,1.209-.614,2.687-.494,3.781,.311l6.754,4.953c.94,.689,1.48,1.754,1.48,2.921s-.54,2.232-1.481,2.922l-6.754,4.953c-.635,.467-1.384,.705-2.139,.705Zm.003-14.161c-.096,0-.193,.024-.289,.073-.223,.113-.341,.305-.341,.556v9.906c0,.25,.118,.442,.341,.556,.224,.113,.448,.095,.649-.053l6.755-4.954c.167-.122,.254-.295,.254-.502s-.088-.38-.254-.502L3.991,6.544c-.115-.084-.236-.126-.361-.126Z" /></svg>
                        </button>
                    </div>
                    <div className="flex">
                        <div className="right-group flex gap-4 px-8 border-r border-l border-slate-600">
                            <button onClick={() => document.querySelector('audio').currentTime = 0} className='text-slate-500 cursor-pointer'>
                                <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="18" height="18"><path fill="currentColor" d="M12,2a10.032,10.032,0,0,1,7.122,3H16a1,1,0,0,0-1,1h0a1,1,0,0,0,1,1h4.143A1.858,1.858,0,0,0,22,5.143V1a1,1,0,0,0-1-1h0a1,1,0,0,0-1,1V3.078A11.981,11.981,0,0,0,.05,10.9a1.007,1.007,0,0,0,1,1.1h0a.982.982,0,0,0,.989-.878A10.014,10.014,0,0,1,12,2Z" /><path fill="currentColor" d="M22.951,12a.982.982,0,0,0-.989.878A9.986,9.986,0,0,1,4.878,19H8a1,1,0,0,0,1-1H9a1,1,0,0,0-1-1H3.857A1.856,1.856,0,0,0,2,18.857V23a1,1,0,0,0,1,1H3a1,1,0,0,0,1-1V20.922A11.981,11.981,0,0,0,23.95,13.1a1.007,1.007,0,0,0-1-1.1Z" /></svg>
                            </button>
                            <button className='text-slate-500 cursor-pointer'>
                                <svg xmlns="http://www.w3.org/2000/svg" id="Filled" viewBox="0 0 24 24" width="18" height="18"><path fill="currentColor" d="M23.421,16.583,20.13,13.292a1,1,0,1,0-1.413,1.414L21.007,17A9.332,9.332,0,0,1,14.321,14.2a.982.982,0,0,0-1.408.08L12.9,14.3a1,1,0,0,0,.075,1.382A11.177,11.177,0,0,0,21.01,19l-2.293,2.293A1,1,0,1,0,20.13,22.7l3.291-3.291A2,2,0,0,0,23.421,16.583Z" /><path fill="currentColor" d="M21.007,7l-2.29,2.29a.892.892,0,0,0-.054.082.992.992,0,0,0,1.467,1.332L21.836,9l1.586-1.585a2,2,0,0,0,.457-2.1,1.969,1.969,0,0,0-.458-.728L20.13,1.3a1,1,0,1,0-1.413,1.413L21.01,5.005c-4.933.012-7.637,2.674-10.089,5.474C8.669,7.937,6,5.4,1.487,5.046L1.006,5a1,1,0,0,0-1,1,1.02,1.02,0,0,0,1,1c.072,0,.287.033.287.033C5.189,7.328,7.425,9.522,9.6,12c-2.162,2.466-4.383,4.7-8.247,4.96l-.4.021a.994.994,0,1,0,.124,1.985c.156-.007.41-.013.535-.023,5.02-.387,7.743-3.6,10.171-6.409C14.235,9.7,16.551,7.018,21.007,7Z" /></svg>
                            </button>
                        </div>
                        {/* quality */}


                        <div className={`relative flex gap-4 px-4 border-r border-l border-slate-600 `}>
                            <button onClick={() => setOpenQualityPlate(!openQualityPlate)} className='text-slate-500 cursor-pointer flex items-center justify-center flex-col'>
                                <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="18" height="18"><path fill="currentColor" d="M12,8a4,4,0,1,0,4,4A4,4,0,0,0,12,8Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,14Z" /><path fill="currentColor" d="M21.294,13.9l-.444-.256a9.1,9.1,0,0,0,0-3.29l.444-.256a3,3,0,1,0-3-5.2l-.445.257A8.977,8.977,0,0,0,15,3.513V3A3,3,0,0,0,9,3v.513A8.977,8.977,0,0,0,6.152,5.159L5.705,4.9a3,3,0,0,0-3,5.2l.444.256a9.1,9.1,0,0,0,0,3.29l-.444.256a3,3,0,1,0,3,5.2l.445-.257A8.977,8.977,0,0,0,9,20.487V21a3,3,0,0,0,6,0v-.513a8.977,8.977,0,0,0,2.848-1.646l.447.258a3,3,0,0,0,3-5.2Zm-2.548-3.776a7.048,7.048,0,0,1,0,3.75,1,1,0,0,0,.464,1.133l1.084.626a1,1,0,0,1-1,1.733l-1.086-.628a1,1,0,0,0-1.215.165,6.984,6.984,0,0,1-3.243,1.875,1,1,0,0,0-.751.969V21a1,1,0,0,1-2,0V19.748a1,1,0,0,0-.751-.969A6.984,6.984,0,0,1,7.006,16.9a1,1,0,0,0-1.215-.165l-1.084.627a1,1,0,1,1-1-1.732l1.084-.626a1,1,0,0,0,.464-1.133,7.048,7.048,0,0,1,0-3.75A1,1,0,0,0,4.79,8.992L3.706,8.366a1,1,0,0,1,1-1.733l1.086.628A1,1,0,0,0,7.006,7.1a6.984,6.984,0,0,1,3.243-1.875A1,1,0,0,0,11,4.252V3a1,1,0,0,1,2,0V4.252a1,1,0,0,0,.751.969A6.984,6.984,0,0,1,16.994,7.1a1,1,0,0,0,1.215.165l1.084-.627a1,1,0,1,1,1,1.732l-1.084.626A1,1,0,0,0,18.746,10.125Z" /></svg>
                                <span>Quality</span>
                            </button>
                            <div className={` duration-150  ${openQualityPlate ? 'scale-100 opacity-100 pointer-events-auto' : 'opacity-0 scale-75 pointer-events-none'} absolute bottom-full left-1/2 -translate-x-1/2   p-4 flex items-center justify-center`}>
                                {/* quality menu */}
                                <ul className='flex gap-2 flex-col shadow-xl text-slate-400 text-sm font-normal w-[180px] bg-slate-900 mr-4 rounded-md py-4 px-2'>
                                    <li className=' px-4 py-3 cursor-pointer rounded'>
                                        <button className='flex gap-2 items-center'>
                                            <span>Auto</span>
                                        </button>
                                    </li>
                                    <li className='bg-slate-800 px-4 py-3  cursor-pointer  rounded'>
                                        <button className='flex gap-2 items-center'>
                                            <span>760</span>
                                        </button>
                                    </li>
                                    <li className=' px-4  cursor-pointer  py-3 rounded'>
                                        <button className='flex gap-2 items-center'>
                                            <span>480</span>
                                        </button>
                                    </li>



                                </ul>
                            </div>
                        </div>

                        <div className={`relative flex gap-4 px-4 border-r border-l border-slate-600 `}>
                            <button onClick={() => setOpenMorePlate(!openMorePlate)} className='text-slate-500 cursor-pointer'>
                                <svg xmlns="http://www.w3.org/2000/svg" id="Isolation_Mode" viewBox="0 0 24 24" width="23" height="23"><circle fill="currentColor" cx="21.517" cy="12.066" r="2.5" /><circle fill="currentColor" cx="12" cy="12" r="2.5" /><circle fill="currentColor" cx="2.5" cy="12" r="2.5" /></svg>

                            </button>
                            <div className={` duration-150  ${openMorePlate ? 'scale-100 opacity-100 pointer-events-auto' : 'opacity-0 scale-75 pointer-events-none'} absolute bottom-[100%] right-1/2 shadow-xl rounded-md flex items-center justify-center`}>
                                {
                                    // more menu items


                                    <ul className='flex flex-col text-slate-400 text-sm font-normal w-[180px] bg-slate-900 mr-4 rounded-md py-4 px-2'>
                                        <li className='hover:bg-slate-800 px-4 py-3 rounded'>
                                            <button className='flex gap-2 items-center'>
                                                <span>Add To Playlist</span>
                                            </button>
                                        </li>

                                        <li className='hover:bg-slate-800 px-4 py-3 rounded'>
                                            <button className='flex gap-2 items-center'>
                                                <span>Favourite</span>
                                            </button>
                                        </li>

                                        <li className='hover:bg-slate-800 px-4 py-3 rounded'>
                                            <button className='flex gap-2 items-center'>
                                                <span>Recent</span>
                                            </button>
                                        </li>
                                        <li className='hover:bg-slate-800 px-4 py-3 rounded'>
                                            <button className='flex gap-2 items-center'>
                                                <span>Remove From Quiue</span>
                                            </button>
                                        </li>


                                    </ul>
                                }
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </section>
    )
}

export default MusicController