import { useState } from 'react';

export function useNotes() {
    const [notes, setNotes] = useState([]);

    function addNote(newNote) {
        setNotes(notes => [ ...notes, newNote ]);
    }

    return {
        addNote,
        notes
    };
}