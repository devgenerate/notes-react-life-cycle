import React from 'react';

export function Header({ count }) {
    return (
        <header className="header">
            <div className="header__count">
                {count}
            </div>
        </header>
    );
}