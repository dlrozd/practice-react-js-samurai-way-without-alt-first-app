import './App.css'
import {useEffect, useState} from "react";




function App() {


    const [selectedTrackId, setSelectedTrackId] = useState<number | null>(null);
    const [tracks, setTracks] = useState([])

    useEffect(() => {
        console.log("effect")

        fetch("https://musicfun.it-incubator.app/api/1.0/playlists/tracks", {
            headers: {
                "api-key": "0e0d1907-125b-437f-bba3-488ac8d73c4b",
            },
        })
            .then((res) => res.json())
            .then((json) => {
                setTracks(json.data)
            })
    }, [])




    if (tracks === null) {
        return (
            <div>
                <h1>Music Fun Player</h1>
                <p>Loading...</p>
            </div>
        )
    }

    if (tracks.length === 0) {
        return (
            <div>
                <h1>Music Fun Player</h1>
                <p>No tracks found</p>
            </div>
        )
    }



    return (
        <>
            <h1>Music Fun Player</h1>
            <button onClick={() => {setSelectedTrackId(null)}}>reset</button>
            <hr/>
            <ul>
                {
                    tracks.map(track => {

                        return (
                            <li key={track.id} style={{border: track.id === selectedTrackId ? '2px solid violet' : 'none'}}>
                                <div onClick={() => {setSelectedTrackId(track.id)}}>
                                    {track.title}
                                </div>
                                <audio src={track.url} controls>{track.artist}</audio>
                            </li>
                        )
                    })
                }
            </ul>
        </>
    )
}

export default App
