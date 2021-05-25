import React from 'react'

function CanSearchClass() {
    return (
        <div>
            <p>Search for classes by any of the following criteria:</p>
            <ul id="create-class-list">
                <li>Time and Date</li>
                <li>Type</li>
                <li>Duration</li>
                <li>Intensity Level</li>
                <li>Location</li>
            </ul>
        </div>
    )
}

export {
    CanSearchClass
}