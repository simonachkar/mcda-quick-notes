import { useContext } from "react"
import NoteContext from '../context'

const NewNote = () => {
    const { setEditedNote } = useContext(NoteContext)
    return (
        <div
            onClick={() => setEditedNote({ title: '', content: '' })}
            className="p-6 mt-6 text-left border w-96 rounded-xl  bg-gray-200 hover:font-bold focus:bg-gray-300 m-2 cursor-pointer"
        >
            + New Note
        </div>
    )
}

export default NewNote