
import { useContext } from "react"
import NoteContext from '../context'

const Note = ({ note }) => {
    const { setEditedNote } = useContext(NoteContext)
    return (
        <div
            onClick={() => setEditedNote(note)}
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-primary focus:text-primary m-3 cursor-pointer"
        >
            {note.title}
        </div>
    )
}

export default Note