import './App.css'

function App() {
    const tracks = [
        {
            id: 1,
            title: 'Music soundtrack',
            artist: 'Musician',
            url: 'https://music.youtube.com/watch?v=McZUN-afYy4&si=Q3z5wkcfUXekbFOg'
        },
        {
            id: 2,
            title: 'Music soundtrack instrumental',
            artist: 'Musician',
            url: 'https://music.youtube.com/playlist?list=OLAK5uy_nCtCUGc3R9V4Hb2qLIdScnRrtP2mhILKQ&si=Mib1mpkrUhSdgqY6'
        },
    ]

    const tasks = [
        {id: 1, title: "Купить продукты на неделю", isDone: false},
        {id: 2, title: "Полить цветы", isDone: true},
        {id: 3, title: "Сходить на тренировку", isDone: false},
    ]


    return (
        <>
            <h1>Music Fun Player</h1>
            <ul>
                {
                    tracks.map(track => {
                        return (
                            <li key={track.id}>
                                <div>{track.title} </div>
                                <audio src={track.url} controls>{track.artist}</audio>
                            </li>
                        )
                    })
                }
            </ul>

            <h1>Список дел:</h1>
            <ul>
                {tasks.map(task => {

                    return (
                        <li key={task.id}>
                            <div className='checkbox'>
                                {task.title}
                                <input type="checkbox" checked={task.isDone}/>
                            </div>

                        </li>
                    )
                })}

            </ul>

        </>
    )
}

export default App
