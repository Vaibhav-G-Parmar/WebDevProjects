import React, { useState } from 'react'
import Field from './Field';

const CreateNote = ({ onAdd, theme }) => {
    const [note, setNote] = useState({
        title: "",
        content: ""
    });
    // Track validation errors for each field
    const [errors, setErrors] = useState({
        title: "",
        content: ""
    });
    // Track whether each field has been touched (interacted with)
    const [touched, setTouched] = useState({
        title: false,
        content: false
    });

    // Validate individual form fields
    const validateField = (name, value) => {
        if (!value.trim()) {
            return `${name.charAt(0).toUpperCase() + name.slice(1)} is required`;
        }
        return "";
    }

    // Handle input changes
    const handleChange = event => {
        const { name, value } = event.target;
        setNote(prevNote => ({ ...prevNote, [name]: value }));
        setErrors(prev => ({ ...prev, [name]: "" }));
    }

    // Handle input blur (when the field loses focus after clicked once)
    const handleBlur = event => {
        const { name, value } = event.target;
        setTouched(prev => ({ ...prev, [name]: true }));
        setErrors(prev => ({ ...prev, [name]: validateField(name, value) }));
    }

    // Handle Add Note form submission
    const submitNote = event => {
        event.preventDefault();
        const titleError = validateField('title', note.title);
        const contentError = validateField('content', note.content);
        if (titleError || contentError) {
            setErrors({ title: titleError, content: contentError });
            setTouched({ title: true, content: true });
            return;
        }
        onAdd(note);
        setNote({ title: '', content: '' });
        setErrors({ title: '', content: '' });
        setTouched({ title: false, content: false });
    }

    // Render the form
    return (
        <div className="container mt-4">
            <form className="create-note">
                <Field
                    type="text"
                    name="title"
                    placeholder="Title"
                    value={note.title}
                    error={errors.title}
                    touched={touched.title}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                <Field
                    type="textarea"
                    name="content"
                    placeholder="Take a note..."
                    value={note.content}
                    error={errors.content}
                    touched={touched.content}
                    onChange={(e) => {
                        handleChange(e);
                        // Auto-resize logic
                        const textarea = e.target;
                        textarea.style.height = 'auto';
                        const scrollHeight = textarea.scrollHeight;
                        textarea.style.height = `${scrollHeight}px`;
                    }}
                    onBlur={handleBlur}
                    style={{ minHeight: '72px' }} // Approximately 3 lines of text
                    className="auto-resize"
                />
                <button
                    type="submit"
                    className={theme === 'dark' ? 'themeAddBtn' : 'btn'}
                    onClick={submitNote}
                >
                    Add Note
                </button>
            </form>
        </div>
    )
}

export default CreateNote