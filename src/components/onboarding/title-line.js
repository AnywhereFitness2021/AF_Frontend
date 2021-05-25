import React from 'react'

function TitleLine(props) {
    const { as } = props;

    return (
        <p>
          As {as}, you can:  
        </p>
    )
}

export {
    TitleLine
}