import React, { PureComponent } from 'react';

import './styles.scss';

export class Form extends PureComponent {
    state = {
        description: '',
        title: ''
    }

    addNote = () => {
        const { onAdd } = this.props;
        const { description, title } = this.state;

        onAdd({ description, title });
        this.clear();
    }

    setDescription = (event) => {
        this.setState({ description: event.target.value });
    }

    setTitle = (event) => {
        this.setState({ title: event.target.value });
    }

    clear = () => {
        this.setState({ description: '', title: '' });
    }

    render() {
        const { description, title } = this.state;

        return (
            <section className="form">
                <input
                    className="form__title"
                    onChange={this.setTitle}
                    placeholder="Title"
                    type="text"
                    value={title}
                />
                <textarea
                    className="form__description"
                    cols="30"
                    id=""
                    name="form-description"
                    onChange={this.setDescription}
                    placeholder="Description"
                    rows="10"
                    value={description}
                />
                <section className="form__buttons">
                    {
                        title && description && (
                            <button className="form__button-add" onClick={this.addNote}>Add</button>
                        )
                    }
                    {
                        (title || description) && (
                            <button className="form__button-clear" onClick={this.clear}>Clear</button>
                        )
                    }
                </section>
            </section>
        );
    }
}
