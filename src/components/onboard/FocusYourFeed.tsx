import React from 'react'
import CheckboxInput from './CheckboxInput'
import { CommoditiesIcon, Crypto, EtfIcon, OptionsIcon, Stocks } from './Icons'
import StepLayout from './StepLayout'
import { StepComponentProps } from './Helper'

const FocusYourFeed: React.FC<StepComponentProps> = ({ formData, updateFormData }) => {
    const selectedValues = formData.focusYourFeed || []

    const handleCheckboxChange = (value: string) => {
        if (selectedValues.includes(value)) {
            updateFormData(
                'focusYourFeed',
                selectedValues.filter((v) => v !== value),
            )
        } else {
            updateFormData('focusYourFeed', [...selectedValues, value])
        }
    }

    return (
        <StepLayout
            title="Focus Your Feed"
            description="Which markets do you want us to track for you?"
            bottomNote="We’ll filter your signals to what matters."
        >
            <CheckboxInput
                id="us-stocks"
                title="U.S. Stocks"
                icon={<Stocks />}
                value="us_stocks"
                checked={selectedValues.includes('us_stocks')}
                onChange={() => handleCheckboxChange('us_stocks')}
            />
            <CheckboxInput
                id="crypto"
                title="Crypto"
                icon={<Crypto />}
                value="crypto"
                checked={selectedValues.includes('crypto')}
                onChange={() => handleCheckboxChange('crypto')}
            />
            <CheckboxInput
                id="etfs"
                title="ETFs"
                icon={<EtfIcon />}
                value="etfs"
                checked={selectedValues.includes('etfs')}
                onChange={() => handleCheckboxChange('etfs')}
            />
            <CheckboxInput
                id="options"
                title="Options"
                icon={<OptionsIcon />}
                value="options"
                checked={selectedValues.includes('options')}
                onChange={() => handleCheckboxChange('options')}
            />
            <CheckboxInput
                id="commodities"
                title="Commodities"
                icon={<CommoditiesIcon />}
                value="commodities"
                checked={selectedValues.includes('commodities')}
                onChange={() => handleCheckboxChange('commodities')}
            />
        </StepLayout>
    )
}

export default FocusYourFeed
