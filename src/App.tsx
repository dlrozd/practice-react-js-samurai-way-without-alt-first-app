import './App.css'

// const tracks = null;

const tracks = [
    {
        id: 1,
        title: 'Music soundtrack',
        artist: 'Musician',
        url: 'https://music.youtube.com/watch?v=McZUN-afYy4&si=Q3z5wkcfUXekbFOg',
    },
    {
        id: 2,
        title: 'Music soundtrack instrumental',
        artist: 'Musician',
        url: 'https://music.youtube.com/playlist?list=OLAK5uy_nCtCUGc3R9V4Hb2qLIdScnRrtP2mhILKQ&si=Mib1mpkrUhSdgqY6'
    },
]

const selectedTrackId = null;

function App() {

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
            <ul>
                {
                    tracks.map(track => {

                        return (
                            <li key={track.id} style={{border: track.id === selectedTrackId ? '2px solid violet' : 'none'}}>
                                <div>{track.title} </div>
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
