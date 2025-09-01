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
                    onFocus={(e) => e.target.classList.add('active-field')}
                    onBlur={(e) => e.target.classList.remove('active-field')}
                />
            </div>
            <div className="mb-3">
                <textarea
                    type="textarea"
                    className="form-control input-effect auto-expand"
                    name="content"
                    placeholder="Take a note..."
                    rows="3"
                    value={note.content}
                    onChange={(e) => {
                        handleChange(e);
                        // Auto-resize logic
                        const textarea = e.target;
                        textarea.style.height = 'auto';
                        textarea.style.height = Math.min(textarea.scrollHeight, 300) + 'px';
                    }}
                    onFocus={(e) => e.target.classList.add('active-field')}
                    onBlur={(e) => e.target.classList.remove('active-field')}
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
            
            .input-effect:focus {
                background-color: #f8d7a5ff;
                box-shadow: 0 2px 5px rgba(213, 194, 194, 0.2);
                transform: translateY(-1px);
                outline: none !important;         /* Removes browser default outline */
                border-color: #f8d7a5ff !important; /* Changes the border color */
            }
            
            .input-effect:hover:not(:focus) {
                background-color: #f8d7a5ff;
                box-shadow: 0 2px 5px rgba(213, 194, 194, 0.2);
                transform: translateY(-1px);
            }
            
            /* Disable hover effect when any field is active */
            .active-field ~ form .input-effect:hover:not(:focus),
            form:has(.active-field) .input-effect:hover:not(:focus) {
                background-color: #ffffff;
                box-shadow: none;
                transform: none;
            }
            `}
        </style>
    </div>
)
}

export default CreateNote
