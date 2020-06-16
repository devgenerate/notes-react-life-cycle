import React from 'react';

import { Header } from './components/header';
import { Form } from './components/form';
import { Note } from './components/note';

import { useNotes } from './hooks/useNotes';

import './app.scss';

function App() {
  const {
    addNote,
    notes
  } = useNotes();


  return (
    <div className="notes">
      <div className="notes__header">
        <Header count={notes.length} />
      </div>
      <div className="notes__form">
        <Form onAdd={addNote} />
      </div>
      <div className="notes__list">
        {
          notes.map((note, index) => (
            <Note {...note} key={`note-${index}`} />
          ))
        }
      </div>
    </div>
  );
}

export default App;