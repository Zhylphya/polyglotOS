async function loadDashboard() {
    const response = await fetch("./src/pages/dashboard/dashboard.html")
    const html = await response.text()

    const view = document.getElementById("view")

    view.innerHTML = html

    await import("./pages/dashboard/dashboard.js")
}

loadDashboard()