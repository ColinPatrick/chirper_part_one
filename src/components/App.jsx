import React, { useState } from 'react';
import Timeline from './Timeline';

const App = () => {
    const [userInput, setUserInput] = useState('');
    const [msgInput, setMsgInput] = useState('');
    const [chirps, setChirps] = useState([
        {
            username: 'Abraham Lincoln',
            message: "@George Washington you should check out The Expanse. It's dope and so are the books."
        },
        {
            username: 'George Washington',
            message: "Yo what's a good show right now? Looking for something to binge. It has to stay good though none of that GOT business.",
        },
        {
            username: 'John Hancock',
            message: "Man you guys know that feeling when you KNOW you gotta to be working and signing stuff but you still spend the whole day on reddit doing nothing?"
        }
    ]);

    let clearInputs = () => {
        setUserInput('');
        setMsgInput('');
    };

    let handleSubmit = () => {
        let newChirp = {
            username: userInput,
            message: msgInput
        };

        setChirps([newChirp, ...chirps]);
        clearInputs();
    };

    let chirpDisplay = chirps.map((chirp, id) => <Timeline key={id} chirp={chirp} />);

    return (
        <>
            <div className="row d-flex justify-content-center">
                <div className="col-3 mt-4 d-flex justify-content-center">
                    <input className="rounded shadow" type="text" id="un-input" value={userInput} placeholder="Username:" onChange={(e) => setUserInput(e.target.value)} />
                </div>
                <div className="col-3 mt-4 d-flex justify-content-center">
                    <input className="rounded shadow" type="text" id="msg-input" value={msgInput} placeholder="Whatcha got??:" onChange={(e) => setMsgInput(e.target.value)}/>
                </div>
                <div className="col-3 mt-4 d-flex justify-content-center">
                    <button className="btn btn-primary" onClick={handleSubmit}>Chirp it!</button>
                </div>
            </div>

            {chirpDisplay}
        </>        
    );
};

export default App;
