import React, { useState } from 'react';

const SubmitForm = () => {
    const [title, setTitle] = useState('');
    const [url, setUrl] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Submitted: ${title} - ${url}`);
        // Simulasi submit
        window.location.href = '/';
    };

    return (
        <div>
            <h2>Submit</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title: </label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>URL: </label>
                    <input
                        type="url"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default SubmitForm;