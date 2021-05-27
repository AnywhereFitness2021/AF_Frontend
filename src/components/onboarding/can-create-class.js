import React from 'react'

function CanCreateClass() {
    return (
        <div id="can-create-class">
            <p>Create a class with the following information: </p>
            <ul id="create-class-list">
                <li>Class Name</li>
                <li>Type</li>
                <li>Time and Date</li>
                <li>Duration</li>
                <li>Intensity Level</li>
                <li>Location</li>
                <li>Maximum Class Size</li>
            </ul>
            <p>You may also edit and delete these classes!</p>
        </div>
    )
}

export {
    CanCreateClass
}