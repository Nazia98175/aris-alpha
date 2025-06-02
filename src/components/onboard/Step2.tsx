import React from 'react'
import CheckboxInput from './CheckboxInput'
import { CommoditiesIcon, Crypto, EtfIcon, OptionsIcon, Stocks } from './Icons'

const Step2 = () => {
    return (
        <>
            <div className="mx-auto mt-5 w-full max-w-[422px]">
                <h3 className="text-center text-3xl leading-[120%] md:text-[40px]">Focus Your Feed</h3>
            </div>
            <p className="mt-4 text-center leading-[120%] text-white/70 md:mt-8 md:text-lg">
                Which markets do you want us to track for you?
            </p>
            <div className="my-4 w-full space-y-2.5 md:my-8 md:space-y-3.5">
                <CheckboxInput id="us-stocks" title="U.S. Stocks" icon={<Stocks />} value="us_stocks" />
                <CheckboxInput id="crypto" title="Crypto" icon={<Crypto />} value="crypto" />
                <CheckboxInput id="etfs" title="ETFs" icon={<EtfIcon />} value="etfs" />
                <CheckboxInput id="options" title="Options" icon={<OptionsIcon />} value="options" />
                <CheckboxInput id="commodities" title="Commodities" icon={<CommoditiesIcon />} value="commodities" />
            </div>
            <p className="text-center leading-[120%] text-white/70 md:text-lg">
                We’ll filter your signals to what matters.
            </p>
        </>
    )
}

export default Step2
