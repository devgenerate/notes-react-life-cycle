import React, { PureComponent } from 'react';

import { Header } from './components/header';
import { Form } from './components/form';
import { Note } from './components/note';

import './app.scss';

class App extends PureComponent {
  state = {
    notes: []
  }

  addNote = (newNote) => {
    this.setState(({ notes }) => ({
      notes: [...notes, { ...newNote }]
    }));
  }

  render() {
    const { notes } = this.state;

    return (
      <div className="notes">
        <div className="notes__header">
          <Header count={notes.length} />
        </div>
        <div className="notes__form">
          <Form onAdd={this.addNote} />
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

}

export default App;
