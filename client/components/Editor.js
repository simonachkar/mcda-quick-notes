
import axios from "axios"

const EditNote = ({ note }) => {
    const { title, content } = note

    /**
     * This function is INCOMPLETE, I just included some helper code for you.
     * axios is a library used to do http request
     * Here, I'm doing an POST request to the api to save the note
     * When the data is changed you should update the data on the notes page
     */
    const saveNote = () => {
        axios.post('http://localhost:3001/save-note',
            {
                id: editedNote.id, content, title
            })
            .then(() => {
                // TODO: Fetch new data
                // TODO: And update a "global" state with the new data 
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
            />
            <textarea
                value={content}
                className="form-textarea mt-1 block w-[40rem] pt-4 pb-4 pl-6 pr-6  mb-8 border-2"
                rows="3"
            />
            <button
                className="rounded-lg px-4 py-2 bg-primary"
            >
                Save
            </button>
            <button
                className="rounded-lg px-4 py-2 bg-gray-300 ml-5"
            >
                Close
            </button>
        </div>
    )
}

export default EditNote