import React, {useState} from 'react'

const CreateNote = ({ onAdd }) => {
    const [note, setNote] = useState({
        title: "",
        content: ""
    });

  function handleChange(event) {
        const { name, value } = event.target;
        setNote(prevNote => ({
            ...prevNote,
            [name]: value
        }));
    }
    // Only add note if both title and content are present
    const isNoteValid = note.title.trim() !== "" && note.content.trim() !== "";
    function submitNote(event) {
        event.preventDefault();
        if (!isNoteValid) {
            return;
        }
        onAdd(note);
        setNote({
            title: "",
            content: ""
        });
    }

return (
    <div className="container mt-4">
        <form className="create-note">
            <div className="mb-3">
                <input
                    type="text"
                    className="form-control input-effect"
                    name="title"
                    placeholder="Title"
                    value={note.title}
                    onChange={handleChange}
                />
            </div>
            <div className="mb-3">
                <textarea
                    type="textarea"
                    className="form-control input-effect"
                    name="content"
                    placeholder="Take a note..."
                    rows="3"
                    value={note.content}
                    onChange={handleChange}
                />
            </div>
            <button 
                className="btn" 
                onClick={submitNote}
            >
                Add Note
            </button>
        </form>
        <style>
            {`
            input::placeholder, textarea::placeholder {
                font-family: "Roboto Mono", monospace;
            }
            
            .input-effect {
                transition: all 0.3s ease;
                border: 1px solid #ccc;
            }
            
            .input-effect:focus {
                border-color: #4285f4;
                box-shadow: 0 0 8px rgba(66, 133, 244, 0.6);
                outline: none;
            }
            
            .input-effect:hover {
                border-color: #aaa;
            }
            
            .btn {
                background-color: #f5ba13;
                color: white;
                border: none;
                border-radius: 7px;
                box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
                transition: all 0.2s ease;
            }
            
            .btn:hover {
                background-color: #f0b10e;
                box-shadow: 0 2px 5px rgba(0, 0, 0, 0.4);
                transform: translateY(-1px);
            }
            `}
        </style>
    </div>
)
}

export default CreateNote
