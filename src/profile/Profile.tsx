import React, { useState, SyntheticEvent } from 'react';
import './Profile.css';

export default function Profile() {
    const [name, setName] = useState('');
    const [age, setAge] = useState(18);

    const handleSubmit = (event: SyntheticEvent) => {
        console.log(age);
        event.preventDefault();
    };

    return (
        <form className="Profile-form" onSubmit={handleSubmit}>
            <label>User info </label>
            <label>
                Name:&nbsp;
                <input type="text" value={name} onChange={({ target }) => setName(target.value)} />
            </label>
            <label>
                Age:&nbsp;
                <input type="number" min="0" max="150" value={age} onChange={({ target }) => setAge(Number(target.value))} />
            </label>
            <input className="Submit-profile" type="submit" value="Submit" />
        </form>
    );
};
