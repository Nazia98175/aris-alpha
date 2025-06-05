'use client'
import { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { StepCompletedIcon } from './Icons'

const StepCompleteModal = ({ step, onComplete }: { step: number; onComplete: () => void }) => {
    const controls = useAnimation()

    useEffect(() => {
        controls
            .start({
                width: '100%',
                transition: { duration: 3, ease: 'linear' },
            })
            .then(() => {
                onComplete()
            })
    }, [controls, onComplete])

    return (
        <div>
            {/* Progress bar */}
            <div className="mx-auto my-10 h-3 w-full max-w-[554px] overflow-hidden rounded-[67px] bg-[#3D4048] md:h-5 xl:my-[72px] xl:h-6">
                <motion.div initial={{ width: '0%' }} animate={controls} className="h-full rounded-[120px] bg-white" />
            </div>

            {/* Modal content */}
            <div className="mx-auto flex w-full max-w-[506px] flex-col items-center justify-center rounded-2xl bg-[#FCF6F1] px-4 pt-12 pb-16 backdrop-blur-[10px] sm:px-6 md:rounded-4xl md:px-7 md:pt-16 lg:px-11 lg:pt-[85px]">
                <span className="h-auto max-w-16 md:max-w-24 lg:max-w-[155px]">
                    <StepCompletedIcon />
                </span>
                <h2 className="mt-6 text-center text-2xl leading-[120%] text-nowrap text-[#010101] sm:text-3xl md:mt-10 md:text-[40px]">
                    Step {step} Complete
                </h2>
                <p className="mx-auto mt-6 max-w-[80%] text-center text-lg text-[#3F3F3F] md:text-2xl lg:mt-8 xl:text-2xl">
                    Got it. Your feed will sync with your style.
                </p>
            </div>
        </div>
    )
}

export default StepCompleteModal
