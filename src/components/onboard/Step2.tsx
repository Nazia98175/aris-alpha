import React from 'react'
import CheckboxInput from './CheckboxInput'
import { CommoditiesIcon, Crypto, EtfIcon, OptionsIcon, Stocks } from './Icons'
import StepLayout from './StepLayout'

const Step2 = () => {
    return (
        <StepLayout
            title="Focus Your Feed"
            description="Which markets do you want us to track for you?"
            bottomNote="We’ll filter your signals to what matters."
        >
            <CheckboxInput id="us-stocks" title="U.S. Stocks" icon={<Stocks />} value="us_stocks" />
            <CheckboxInput id="crypto" title="Crypto" icon={<Crypto />} value="crypto" />
            <CheckboxInput id="etfs" title="ETFs" icon={<EtfIcon />} value="etfs" />
            <CheckboxInput id="options" title="Options" icon={<OptionsIcon />} value="options" />
            <CheckboxInput id="commodities" title="Commodities" icon={<CommoditiesIcon />} value="commodities" />
        </StepLayout>
    )
}

export default Step2
