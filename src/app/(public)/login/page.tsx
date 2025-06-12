import LoginForm from '@/components/authentication/login-form'
import React from 'react'

const page = () => {
    return (
        <div className="flex min-h-[calc(100vh-32px)] items-center justify-center sm:min-h-[calc(100vh-64px)]">
            <div className="relative z-10 w-full max-w-[934px]">
                <LoginForm />
            </div>
        </div>
    )
}

export default page
