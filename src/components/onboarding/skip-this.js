import React, { useState } from 'react'
import styled from 'styled-components';

const StyledContainer = styled.div `
    font-size: 1.8rem;
    margin-top: 8%;
`

function SkipThis() {
    const [skip, setSkip] = useState();

    const update = (event) => {
        const {checked} = event.target;
        setSkip(checked);
    }

    return (
        <StyledContainer>
            <label htmlFor="skipThis">Never Show This Again
                <input id="skip-this" name="skip" type="checkbox"
                    onChange={update} value={skip}/>
            </label>
        </StyledContainer>
    )
}

export {
    SkipThis
}