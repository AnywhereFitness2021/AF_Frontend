import React from 'react'
import { CanReserveClass } from './can-reserve-class'
import { CanSearchClass } from './can-search-class'
import { SkipThis } from './skip-this'
import { TitleLine } from './title-line'

function OnboardClient(props) {
    return (
        <div>
            <TitleLine as="a client" />
            <CanSearchClass />
            <CanReserveClass />
            <SkipThis />
        </div>
    )
}

export default OnboardClient