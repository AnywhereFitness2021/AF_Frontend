import React, { useState } from 'react'

function SkipThis() {
    const [skip, setSkip] = useState();

    const update = (event) => {
        const {checked} = event.target;
        setSkip(checked);
    }

    return (
        <div>
            <label htmlFor="skipThis">Never Show This Again
                <input id="skip-this" name="skip" type="checkbox"
                    onChange={update} value={skip}/>
            </label>
        </div>
    )
}

export {
    SkipThis
}