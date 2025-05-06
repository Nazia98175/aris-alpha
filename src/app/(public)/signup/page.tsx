import React from 'react'
import SignupForm from '@/components/authentication/signup-form'

const page = () => {
    return (
        <div className="flex min-h-[calc(100vh-32px)] items-center justify-center sm:min-h-[calc(100vh-64px)]">
            <div className="relative z-10 w-full max-w-3xl">
                <SignupForm />
            </div>
        </div>
    )
}

export default page
