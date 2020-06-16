import React from 'react';

import './styles.scss';

export function Note({
    description,
    title
}) {
    return (
        <section className="note">
            <div className="note__title">{title}</div>
            <div className="note__description">{description}</div>
        </section>
    );
}
