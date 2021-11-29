import { useState } from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Note from "../components/Note"
import NoteContext from '../context'
import EditNote from "../components/EditNote"
import NewNote from "../components/NewNote"

function Notes({ data }) {
    const [notesData, refreshData] = useState(data)
    const [editedNote, setEditedNote] = useState(null)
    return (
        <NoteContext.Provider value={{ refreshData, editedNote, setEditedNote }}>
            <div className="flex flex-col w-full items-center ustify-center min-h-screen py-2">
                <Header />
                {editedNote ? <EditNote note={editedNote} /> : undefined}
                <main className="flex flex-wrap items-center pl-60 pr-60 justify-center w-full mt-10 text-center">
                    {notesData ? notesData.map(note => <Note note={note} />) : "Loading Notes"}
                    <NewNote />
                </main>
                <Footer />
            </div>
        </NoteContext.Provider>

    )
}

export async function getServerSideProps() {
    const res = await fetch('http://localhost:3001/get-notes')
    const data = await res.json()

    // Pass data to the page via props
    return { props: { data } }
}

export default Notes