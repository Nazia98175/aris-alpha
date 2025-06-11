'use client'
import { motion, useAnimation } from 'framer-motion'
import { useEffect, useState } from 'react'
const StepCompleteModal = ({
    step,
    onComplete,
    desc,
    icon: IconComponent,
}: {
    step: number
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
    desc: string
    onComplete: () => void
}) => {
    const progressControls = useAnimation()
    const cardControls = useAnimation()
    const modalControls = useAnimation()
    const [displayedText, setDisplayedText] = useState('')
    useEffect(() => {
        const runSequence = async () => {
            // Step 1: Animate progress bar fill over 2 seconds (card hidden)
            await progressControls.start({
                width: '100%',
                transition: { duration: 1, ease: 'linear' },
            })
            // Step 2: Animate card fade/slide in over 0.6s
            await cardControls.start({
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease: 'easeOut', delay: 0.5 },
            })

            // Typewriter effect for description text
            for (let i = 0; i <= desc.length; i++) {
                setDisplayedText(desc.slice(0, i))
                await new Promise((resolve) => setTimeout(resolve, 30))
            }

            // Step 3: Wait 3 seconds with card visible
            await new Promise((resolve) => setTimeout(resolve, 1500))
            // Step 4: Animate fade out and slide down of entire modal (progress bar + card)
            await modalControls.start({
                opacity: 0,
                y: 50,
                transition: { duration: 0.5, ease: 'easeInOut' },
            })
            onComplete()
        }
        runSequence()
    }, [progressControls, cardControls, modalControls, onComplete, desc])
    return (
        <motion.div initial={{ opacity: 1, y: 0 }} animate={modalControls} className="flex items-center justify-center">
            <div className="w-full max-w-[554px] px-4">
                {/* Progress Bar */}
                <motion.div
                    initial={{ opacity: 1 }}
                    animate={progressControls}
                    className="my-10 h-3 w-full overflow-hidden rounded-[67px] bg-[#3D4048] md:h-5 xl:my-[72px] xl:h-6"
                >
                    <motion.div
                        initial={{ width: '0%' }}
                        animate={progressControls}
                        className="h-full rounded-[120px] bg-white"
                    />
                </motion.div>
                {/* Card */}
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={cardControls}
                    className="mx-auto w-full max-w-[456px] rounded-2xl bg-[#FCF6F1] px-4 py-12 backdrop-blur-[10px] sm:px-6 md:rounded-4xl md:px-7"
                >
                    <span className="mx-auto block h-auto max-w-16 md:max-w-24">
                        <IconComponent className="h-full w-full text-[#2A64F6]" />
                    </span>
                    <h2 className="mt-6 text-center text-2xl leading-[120%] text-nowrap text-[#010101] sm:text-3xl xl:text-4xl">
                        Step {step} Complete
                    </h2>
                    <p className="mx-auto mt-4 max-w-[80%] text-center text-lg text-[#3F3F3F]">{displayedText}</p>
                </motion.div>
            </div>
        </motion.div>
    )
}
export default StepCompleteModal
