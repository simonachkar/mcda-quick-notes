
import axios from "axios"
import { useState, useContext } from "react"

import NoteContext from '../context'

const EditNote = ({ note }) => {
    const { editedNote, setEditedNote, refreshData } = useContext(NoteContext)
    const [content, changeContent] = useState(note.content)
    const [title, changeTitle] = useState(note.title)

    const saveNote = async () => {
        axios.post('http://localhost:3001/save-note', {
            id: editedNote.id, content, title
        })
            .then(() => {
                setEditedNote(null)

                // Fetch new data
                fetch('http://localhost:3001/get-notes')
                    .then(res => res.json())
                    .then(data => refreshData(data))
            })
            .catch(error => {
                console.log(error);
            });
    }

    return (
        <div className="m-10">
            <input
                value={title}
                className=" mt-4 block w-[40rem] pt-4 pb-4 pl-6 pr-6 mb-8 border-2"
                onChange={(e) => changeTitle(e.target.value)}
            />
            <textarea
                value={content}
                className="form-textarea mt-1 block w-[40rem] pt-4 pb-4 pl-6 pr-6  mb-8 border-2"
                rows="3"
                onChange={(e) => changeContent(e.target.value)}
            />
            <button
                className="rounded-lg px-4 py-2 bg-primary"
                onClick={() => saveNote()}
            >
                Save
            </button>
            <button
                className="rounded-lg px-4 py-2 bg-gray-300 ml-5"
                onClick={() => setEditedNote(null)}
            >
                Close
            </button>
        </div>
    )
}

export default EditNote