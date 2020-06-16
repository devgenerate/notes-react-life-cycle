import React from 'react';

import { useForm } from './hooks/useForm';

import './styles.scss';

export function Form({ onAdd }) {
    const {
        clear,
        description,
        setDescription,
        setTitle,
        title
    } = useForm();

    function addNote(e) {
        e.preventDefault();
        onAdd({ description, title });
        clear();
    }

    return (
        <section className="form">
            <input
                className="form__title"
                onChange={(e) => {
                    setTitle(e.target.value);
                }}
                placeholder="Title"
                type="text"
                value={title}
            />
            <textarea
                className="form__description"
                cols="30"
                id=""
                name="form-description"
                onChange={(e) => {
                    setDescription(e.target.value);
                }}
                placeholder="Description"
                rows="10"
                value={description}
            />
            <section className="form__buttons">
                {
                    title && description && (
                        <button className="form__button-add" onClick={addNote}>Add</button>
                    )
                }
                {
                    (title || description) && (
                        <button className="form__button-clear" onClick={clear}>Clear</button>
                    )
                }
            </section>
        </section>
    );
}
