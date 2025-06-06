// components/onboard/LoaderSpinner.tsx
const LoaderSpinner = () => {
    return (
        <div className="flex h-[300px] w-full items-center justify-center">
            <div className="h-8 w-8 animate-spin rounded-full border-4 border-white border-t-[#2A64F6] sm:h-12 sm:w-12" />
        </div>
    )
}

export default LoaderSpinner
