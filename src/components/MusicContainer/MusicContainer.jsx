import React, { useEffect, useState } from 'react'
import mList from '../../assests/js/ganna.json'
import MusicWRapper from './MusicWRapper'
const MusicContainer = ({ getActiveSong, setMusicPlayStatus, setPlaylist }) => {

    const [cardBox, setCardbox] = useState(mList.cardbox)

    return (
        <main className='px-4 md:px-16  pt-20 md:pt-16 md:pb-16 pb-60'>
            {
                cardBox.map(card => <MusicWRapper setPlaylist={setPlaylist} setMusicPlayStatus={setMusicPlayStatus} getActiveSongFromMusicWrapper={getActiveSong} cardData={card} />
                )
            }
        </main>
    )
}

export default MusicContainer