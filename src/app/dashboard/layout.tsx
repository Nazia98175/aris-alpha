// src/app/test/layout.tsx
import { TestLayout } from '@/components/dashboard/TestLayout'

export default function TestSectionLayout({ children }: { children: React.ReactNode }) {
    return (
        <TestLayout>
            <div className="flex w-full max-w-full items-center justify-center">{/* <TabNavigation /> */}</div>
            <div className="mx-auto max-w-[1920px] text-white">{children}</div>
        </TestLayout>
    )
}
