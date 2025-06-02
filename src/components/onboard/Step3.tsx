import React from 'react'
import CheckboxInput from './CheckboxInput'

const Step3 = () => {
    return (
        <>
            <div className="mx-auto mt-5 w-full max-w-[422px]">
                <h3 className="text-center text-3xl leading-[120%] md:text-[40px]">
                    How Often Do You <br /> Take Action?
                </h3>
            </div>
            <p className="mt-4 text-center leading-[120%] text-white/70 md:mt-8 md:text-lg">
                How often do you act on new ideas or positions?
            </p>
            <div className="my-4 w-full space-y-2.5 md:my-8 md:space-y-3.5">
                <CheckboxInput id="weekly" title="Weekly" value="weekly" />
                <CheckboxInput id="monthly" title="Monthly" value="monthly" />
                <CheckboxInput id="occasionally" title="Occasionally" value="occasionally" />
                <CheckboxInput id="rarely" title="Rarely – mostly observing" value="rarely" />
            </div>
            <p className="text-center leading-[120%] text-white/70 md:text-lg">
                This guides how often we prompt signal shifts.
            </p>
        </>
    )
}

export default Step3
