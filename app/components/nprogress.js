'use client'
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';

export default function Nprogress() {
  return (
    <div>
        <ProgressBar
          height="6px"
          color="#ff5801"
          options={{ showSpinner: true }}
          shallowRouting
        />
    </div>
  )
}
