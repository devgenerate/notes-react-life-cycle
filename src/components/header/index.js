import React from 'react';

import './styles.scss';

export function Header({ count }) {
    return (
        <header className="header">
            <div className="header__count">
                {count}
            </div>
        </header>
    );
}
