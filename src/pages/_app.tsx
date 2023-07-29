import "@/styles/globals.css"
import type { AppProps } from "next/app"
import { Analytics } from "@vercel/analytics/react"
import { MagicBellProvider } from "@magicbell/react-headless"
import { SubscriptionManager } from "@/services/subscriptionManager"
import { DeviceInfoProvider } from "@/hooks/useDeviceInfo"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <MagicBellProvider
        apiKey="64a2a6fff4d314ce9f44a171a31c84232fe49b6b"
        userExternalId={SubscriptionManager.getOrSetUserId()}
      >
        <DeviceInfoProvider>
          <Component {...pageProps} />
        </DeviceInfoProvider>
      </MagicBellProvider>
      <Analytics />
    </>
  )
}
