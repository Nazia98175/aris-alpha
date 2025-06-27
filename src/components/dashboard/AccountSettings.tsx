'use client'
import { useState } from 'react'
import { EmailAddress, ThemeIcon, UserName } from '../home/Icons'
import CommonBtn from '../ui/common-btn'
import SettingsGroup from './SettingsGroup'
import SettingsRow from './SettingsRow'
import ToggleSwitch from './ToggleSwitch'

const AccountSettings = () => {
    const [themeDark, setThemeDark] = useState(false)
    const [emailNotifications, setEmailNotifications] = useState(false)
    const [telegramNotifications, setTelegramNotifications] = useState(false)

    return (
        <div className="rounded-lg bg-white/[3%] p-3 md:p-6">
            <div className="h-auto w-full max-w-[780px] space-y-3 text-base font-normal backdrop-blur-[32px] md:space-y-6">
                <SettingsGroup title="Profile Information">
                    <div className="flex flex-wrap justify-between gap-3 md:justify-start md:gap-14">
                        <SettingsRow icon={<UserName />} label="User Name" description="John Smith" />
                        <SettingsRow icon={<EmailAddress />} label="Email Address" description="user@example.com" />
                    </div>
                </SettingsGroup>
                <SettingsGroup title="Preferences">
                    <SettingsRow
                        icon={<ThemeIcon />}
                        label="Theme"
                        description={themeDark ? 'Light' : 'Dark'}
                        rightElement={<ToggleSwitch enabled={themeDark} onToggle={() => setThemeDark(!themeDark)} />}
                    />
                </SettingsGroup>
                <SettingsGroup title="Notification Settings">
                    <SettingsRow
                        label="Email Notifications"
                        rightElement={
                            <ToggleSwitch
                                enabled={emailNotifications}
                                onToggle={() => setEmailNotifications(!emailNotifications)}
                            />
                        }
                    />
                    <SettingsRow
                        label="Telegram Notifications"
                        rightElement={
                            <ToggleSwitch
                                enabled={telegramNotifications}
                                onToggle={() => setTelegramNotifications(!telegramNotifications)}
                            />
                        }
                    />
                </SettingsGroup>
                <SettingsGroup title="Subscription Management">
                    <p className="text-xs text-white md:text-base">
                        Manage your billing and subscription through our secure provider.
                    </p>
                    <CommonBtn
                        className="my-3 w-fit !px-5 !py-2 md:my-5"
                        btnText="Manage Subscription"
                        variant="secondary"
                    />
                </SettingsGroup>
                <SettingsGroup title="Legal & Compliance">
                    <p className="whitespace-wrap text-xs text-white md:text-base lg:whitespace-nowrap">
                        All insights and tools are for informational purposes only and do not constitute financial or
                        investment advice.
                    </p>
                </SettingsGroup>
            </div>
        </div>
    )
}

export default AccountSettings
