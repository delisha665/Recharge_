const screens = document.querySelectorAll(".screen");
const navItems = document.querySelectorAll(".nav-item");

function navigate(screenName, clickedButton) {

    screens.forEach(screen => {
        screen.classList.remove("active");
    });

    const target = document.getElementById(screenName);

    if (target) {
        target.classList.add("active");
    }

    navItems.forEach(item => {
        item.classList.remove("active");
    });

    if (clickedButton) {
        clickedButton.classList.add("active");
    }

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


function goHome() {

    const homeButton = document.querySelector(
        '.nav-item[onclick*="home"]'
    );

    navigate("home", homeButton);
}


function openPods() {

    const podsButton = document.querySelector(
        '.nav-item[onclick*="pods"]'
    );

    navigate("pods", podsButton);
}


function openHistory() {

    const historyButton = document.querySelector(
        '.nav-item[onclick*="history"]'
    );

    navigate("history", historyButton);
}


function openPod() {

    document.querySelectorAll(".screen").forEach(screen => {
        screen.classList.remove("active");
    });

    document.getElementById("recharge").classList.add("active");

    navItems.forEach(item => {
        item.classList.remove("active");
    });

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


function selectPod(name) {

    document.getElementById("selectedPod").textContent = name;

    openPod();
}


function startRecharge() {

    const popup = document.getElementById("popup");

    popup.classList.add("show");
}


function closePopup() {

    document.getElementById("popup").classList.remove("show");
}


function showNotification() {

    alert("You're all caught up. No new notifications.");
}