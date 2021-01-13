import React, { useContext } from 'react';
import { AlertContext } from '../context/alert/alertContext';

export const Notes = ( { notes, onRemove } ) => {
    const alert = useContext(AlertContext);
    return(
        <ul className="list-group">
            {notes.map((note) => (
                <li
                    className="list-group-item note"
                    key={note.id}
                >
                    <div>
                        <strong>{note.title}</strong>
                        <small>{note.date}</small>
                    </div>
                    <button
                        type="button"
                        className="btn btn-outline-danger btn-sm"
                        onClick={() => {
                            onRemove(note.id)
                            .then(() => {
                                alert.show('Notice removed.', 'secondary');
                            });
                        }}
                    >
                        &times;
                    </button>
                </li>
            ))}
            
        </ul>
    )
};
