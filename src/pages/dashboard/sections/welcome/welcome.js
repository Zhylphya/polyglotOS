function getPeriodOfDay() {
    const hour = new Date().getHours()

    if (hour >= 5 && hour < 12) {
        return "morning"
    }

    if (hour >= 12 && hour < 18) {
        return "afternoon"
    }

    return "night"
}

function welcome() {
    return `
        <div class="welcome-content">
            <h1>Good ${getPeriodOfDay()}, Vitória!</h1>
            <p>Let's continue your language journey today.</p>
        </div>
    `
}

function loadWelcome() {
    const element = document.getElementById("welcome")

    element.innerHTML = welcome()

    const style = document.createElement("link")
    style.rel = "stylesheet"
    style.href = "./sections/welcome/welcome.css"
    document.head.appendChild(style)
}

export { loadWelcome }