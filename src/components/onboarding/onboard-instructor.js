import React from 'react'
import { CanCreateClass } from './can-create-class'
import { CanCreateVirtualPunchPass } from './can-create-punch-pass'
import { SkipThis } from './skip-this'
import { TitleLine } from './title-line'

function OnboardInstructor(props) {
    return (
        <div>
            <TitleLine as="an instructor" />
            <CanCreateClass />
            <CanCreateVirtualPunchPass />
            <SkipThis />
        </div>
    )
}

export {
    OnboardInstructor
}