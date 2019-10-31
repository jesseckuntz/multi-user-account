import { Data, Override } from "framer"

const data = Data({
    currentPage: 0,
    showParentalControls: false,
})

export function TabContainer(): Override {
    return {
        currentPage: data.currentPage,
    }
}

export function ProgressTab(): Override {
    return {
        style: {
            borderBottom: data.currentPage == 0 ? "3px solid black" : "none",
        },
        onTap() {
            data.currentPage = 0
        },
    }
}

export function UpcomingSessionsTab(): Override {
    return {
        style: {
            borderBottom: data.currentPage == 1 ? "3px solid black" : "none",
        },
        onTap() {
            data.currentPage = 1
        },
    }
}

export function SessionHistoryTab(): Override {
    return {
        style: {
            borderBottom: data.currentPage == 2 ? "3px solid black" : "none",
        },
        onTap() {
            data.currentPage = 2
        },
    }
}

export function TutorTab(): Override {
    return {
        style: {
            borderBottom: data.currentPage == 3 ? "3px solid black" : "none",
        },
        onTap() {
            data.currentPage = 3
        },
    }
}

// Account page
export function AccoridionHeader(): Override {
    return {
        onTap() {
            data.showParentalControls = !data.showParentalControls
        },
    }
}

export function ParentalControls(): Override {
    return {
        visible: data.showParentalControls ? true : false,
    }
}
