
/**
 * This component is INCOMPLETE.
 * You'll need to show the editor onClick
 */
const Note = ({ note }) => {
    return (
        <div
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-primary focus:text-primary m-3 cursor-pointer"
        >
            {note.title}
        </div>
    )
}

export default Note