import React from 'react'

export default function AuthLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <div className="relative overflow-hidden bg-[#010318] p-4 sm:p-8">
            {children}

            <div
                className="absolute -top-[8%] left-[20%] h-[50vh] w-12 -rotate-45 blur-3xl"
                style={{
                    background:
                        'linear-gradient(270deg, rgba(96, 63, 254, 0.068) 0%, rgba(96, 63, 254, 0.85) 50.5%, rgba(96, 63, 254, 0.068) 100%)',
                }}
            />
            <div
                className="absolute top-[5%] left-[10%] h-[80vh] w-12 -rotate-45 blur-3xl"
                style={{
                    background:
                        'linear-gradient(270deg, rgba(96, 63, 254, 0.068) 0%, rgba(96, 63, 254, 0.85) 50.5%, rgba(96, 63, 254, 0.068) 100%)',
                }}
            />
            <div
                className="absolute -top-[8%] right-[20%] h-[50vh] w-12 rotate-45 blur-3xl"
                style={{
                    background:
                        'linear-gradient(270deg, rgba(96, 63, 254, 0.068) 0%, rgba(96, 63, 254, 0.85) 50.5%, rgba(96, 63, 254, 0.068) 100%)',
                }}
            />
            <div
                className="absolute top-[5%] right-[10%] h-[80vh] w-12 rotate-45 blur-3xl"
                style={{
                    background:
                        'linear-gradient(270deg, rgba(96, 63, 254, 0.068) 0%, rgba(96, 63, 254, 0.85) 50.5%, rgba(96, 63, 254, 0.068) 100%)',
                }}
            />

            <div
                className="absolute top-0 left-1/2 h-[150px] w-[60%] -translate-x-1/2 transform blur-[100px]"
                style={{
                    background:
                        'linear-gradient(258.8deg, rgba(115, 0, 255, 0.7) 16.35%, rgba(255, 150, 21, 0.7) 77.56%)',
                }}
            />
        </div>
    )
}
