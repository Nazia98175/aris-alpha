import React from 'react'
import CheckboxInput from './CheckboxInput'
import StepLayout from './StepLayout'
import { StepComponentProps } from './Helper'
type TakeActionProps = StepComponentProps

const TakeAction: React.FC<TakeActionProps> = ({ formData, updateFormData }) => {
    const selectedValues = formData.takeAction || []

    const handleCheckboxChange = (value: string) => {
        if (selectedValues.includes(value)) {
            updateFormData(
                'takeAction',
                selectedValues.filter((v) => v !== value),
            )
        } else {
            updateFormData('takeAction', [...selectedValues, value])
        }
    }

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
            <CheckboxInput
                id="weekly"
                title="Weekly"
                value="weekly"
                checked={selectedValues.includes('weekly')}
                onChange={() => handleCheckboxChange('weekly')}
            />
            <CheckboxInput
                id="monthly"
                title="Monthly"
                value="monthly"
                checked={selectedValues.includes('monthly')}
                onChange={() => handleCheckboxChange('monthly')}
            />
            <CheckboxInput
                id="occasionally"
                title="Occasionally"
                value="occasionally"
                checked={selectedValues.includes('occasionally')}
                onChange={() => handleCheckboxChange('occasionally')}
            />
            <CheckboxInput
                id="daily"
                title="Daily"
                value="daily"
                checked={selectedValues.includes('daily')}
                onChange={() => handleCheckboxChange('daily')}
            />
        </StepLayout>
    )
}

export default TakeAction
