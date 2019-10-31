import * as React from "react"
import { Override, Data } from "framer"

// Learn more: https://framer.com/docs/overrides/

const appState = Data({
    currentPage: 0,
})

export function SignInButton(): Override {
    return {
        onTap() {
            appState.currentPage = 1
        },
    }
}

export function LoginPage(): Override {
    return {
        currentPage: appState.currentPage,
    }
}

export function Avatars(): Override {
    return {
        onTap() {
            setTimeout(() => {
                appState.currentPage = 0
            }, 1000)
        },
    }
}
