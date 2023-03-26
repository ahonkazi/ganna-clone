import React, { useState } from 'react'

const PlayList = ({ item, setActiveSong, setMusicPlayStatus }) => {
    const [subMenuStatus, setSubMenuStatus] = useState(false)

    let listItem = document.querySelector('li')
    return (
        <li onClick={() => {setActiveSong(item);setMusicPlayStatus(false);setTimeout(()=>setMusicPlayStatus(true),[10])}} className='bg-slate-800 px-4 py-3 rounded relative'>
            <div className='flex justify-between items-center w-full cursor-pointer'>
                <div className="flex items-center gap-4">
                    <img className='w-10 rounded-md' src={item.image_source} alt="" />
                    <p className='text-slate-300 text-base '>{item.song_name}</p>
                </div>
                <div className="flex items-center gap-10 ">
                    <p className='text-slate-400 text-base '>{item.album_name}</p>
                    <button onClick={() => setSubMenuStatus(!subMenuStatus)} className={`text-slate-400 text-base ${subMenuStatus ? 'bg-slate-700' : ''} flex items-center justify-center duration-500 w-8 h-8 rounded-full hover:bg-slate-700`}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><circle fill="currentColor" cx="21.517" cy="12.066" r="2.5" /><circle fill="currentColor" cx="12" cy="12" r="2.5" /><circle fill="currentColor" cx="2.5" cy="12" r="2.5" /></svg>
                    </button>
                </div>

            </div>

            {/* sub menus */}

            <div className={`absolute z-50 ${subMenuStatus ? 'scale-100 opacity-100 pointer-events-auto' : 'opacity-0 scale-90 pointer-events-none'} top-[105%] right-0 h-[200px] w-[180px] bg-slate-800 duration-300 `}>
                <ul className='flex flex-col text-slate-400 text-sm font-normal rounded-md py-4 px-2'>
                    <li className='hover:bg-slate-900 px-4 py-3 rounded cursor-pointer'>
                        <button className='flex gap-2 items-center'>
                            <span>Add To Playlist</span>
                        </button>
                    </li>

                    <li className='hover:bg-slate-900 px-4 py-3 rounded cursor-pointer'>
                        <button className='flex gap-2 items-center'>
                            <span>Favourite</span>
                        </button>
                    </li>

                    <li className='hover:bg-slate-900 px-4 py-3 rounded cursor-pointer'>
                        <button className='flex gap-2 items-center'>
                            <span>Recent</span>
                        </button>
                    </li>
                    <li className='hover:bg-slate-900 px-4 py-3 rounded cursor-pointer'>
                        <button className='flex gap-2 items-center'>
                            <span>Remove From Quiue</span>
                        </button>
                    </li>


                </ul>
            </div>
        </li>
    )
}

export default PlayList