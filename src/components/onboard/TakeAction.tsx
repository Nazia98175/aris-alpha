import React from 'react'
import CheckboxInput from './CheckboxInput'
import StepLayout from './StepLayout'

const TakeAction = () => {
    return (
        <StepLayout
            title={
                <>
                    How Often Do You <br /> Take Action?
                </>
            }
            description="How often do you act on new ideas or positions?"
            bottomNote="This guides how often we prompt signal shifts."
        >
            <CheckboxInput id="weekly" title="Weekly" value="weekly" />
            <CheckboxInput id="monthly" title="Monthly" value="monthly" />
            <CheckboxInput id="occasionally" title="Occasionally" value="occasionally" />
            <CheckboxInput id="rarely" title="Rarely – mostly observing" value="rarely" />
        </StepLayout>
    )
}

export default TakeAction
