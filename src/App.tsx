import './App.css'
import {useEffect, useState} from "react";

interface Track {
    id: number;
    attributes: {
        title: string;
        attachments: { url: string }[];
    };
}

function App() {


    const [selectedTrackId, setSelectedTrackId] = useState<number | null>(null);
    const [tracks, setTracks] = useState<Track[] | null>([])

    useEffect(() => {
        console.log("effect")

        fetch("https://musicfun.it-incubator.app/api/1.0/playlists/tracks", {
            headers: {
                "api-key": "7fddcc08-7109-4369-88ea-5037c0b497e3",
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
            <h1>Music Fun Player 🎧</h1>
            <button onClick={() => {
                setSelectedTrackId(null)
            }}> Reset Selection
            </button>
            <ul>
                {tracks.map(track => {

                    const isSelected = track.id === selectedTrackId;

                    return (
                        <li key={track.id}
                            className={isSelected ? 'selected' : ''}>
                            <div
                                className="track-title"
                                title={track.attributes.title}
                                onClick={() => {setSelectedTrackId(track.id)}}>
                                {track.attributes.title}
                            </div>
                            <audio src={track.attributes.attachments[0].url} controls></audio>
                        </li>
                    )
                })
                }
            </ul>
        </>
    )
}

export default App
