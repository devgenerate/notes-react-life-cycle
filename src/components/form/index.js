import React from 'react';

import './styles.scss';

export function Form({
    description,
    onAdd,
    onClear,
    setDescription,
    setTitle,
    title,
}) {
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
                        <button className="form__button-add" onClick={onAdd}>Add</button>
                    )
                }
                {
                    (title || description) && (
                        <button className="form__button-clear" onClick={onClear}>Clear</button>
                    )
                }
            </section>
        </section>
    );
}
