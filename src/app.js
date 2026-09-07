async function loadDashboard() {
    const response = await fetch("./src/pages/dashboard/dashboard.html")
    const html = await response.text()

    const view = document.getElementById("view")

    view.innerHTML = html

    const style = document.createElement("link")
    style.rel = "stylesheet"
    style.href = "./src/pages/dashboard/dashboard.css"

    document.head.appendChild(style)

    await import("./pages/dashboard/dashboard.js")
}

loadDashboard()