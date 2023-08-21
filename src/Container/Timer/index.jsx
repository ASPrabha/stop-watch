import React from 'react';

const TimerContainer = () => {
    const handleStart = () => {
        alert('starting')
    }
    return <div>

    <label for="appt">Select a time:</label>
    <input type="time" id="appt" name="appt" />
        <button type="button" onClick={handleStart}>Start</button>
        
    </div>
}

export default TimerContainer;