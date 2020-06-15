import React, { PureComponent } from 'react';

import './styles.scss';

export class Header extends PureComponent {
    componentWillMount() {
        console.log('Header will be mounted');
    }

    componentDidMount() {
        console.log('Header was mounted');
    }

    render() {
        const { count } = this.props;

        return (
            <header className="header">
                <div className="header__count">{count}</div>
            </header>
        );
    }
}
