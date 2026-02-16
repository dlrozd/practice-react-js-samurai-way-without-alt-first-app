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

    const [selectedTrackId, setSelectedTrackId] = useState(null)
    const [selectedTrack, setSelectedTrack] = useState(null)
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
                setSelectedTrack(null)
            }}> Reset Selection
            </button>
            <div style={{display: "flex", gap: "30px"}}>
                <ul>
                    {tracks.map((track) => {
                        return (
                            <li
                                key={track.id}
                                style={{
                                    border: track.id === selectedTrackId ? "1px solid orange" : "",
                                }}
                            >
                                <div
                                    onClick={() => {
                                        setSelectedTrackId(track.id)

                                        fetch(
                                            "https://musicfun.it-incubator.app/api/1.0/playlists/tracks/" + track.id,
                                            {
                                                headers: {"api-key": "7fddcc08-7109-4369-88ea-5037c0b497e3"},
                                            },
                                        )
                                            .then((res) => res.json())
                                            .then((json) => {
                                                setSelectedTrack(json.data)
                                            })
                                    }}
                                >
                                    {track.attributes.title}
                                </div>
                                <audio src={track.attributes.attachments[0].url} controls></audio>
                            </li>
                        )
                    })}
                </ul>


                <div>
                    <h2>Details</h2>
                    {selectedTrack === null ?
                        ("Track is not selected") :
                        (selectedTrack.id !== selectedTrackId) ?
                            ("Loading...") :
                            (
                                <div>
                                    <h3>{selectedTrack.attributes.title}</h3>
                                    <h4>Lyrics</h4>
                                    <p>{selectedTrack.attributes.lyrics ?? "no lyrics"}</p>
                                </div>
                            )
                    }
                </div>
            </div>
        </>
    )
}

export default App
