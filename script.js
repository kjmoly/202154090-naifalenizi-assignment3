function showGreeting() {
    const hour = new Date().getHours();
    let message = "";

    if (hour < 12) {
        message = "Good Morning!";
    } else if (hour < 18) {
        message = "Good Afternoon!";
    } else {
        message = "Good Evening!";
    }

    const greetingElement = document.getElementById("greeting-message");
    greetingElement.textContent = message;
}

function setupTabs() {
    const buttons = document.querySelectorAll(".tab-btn");
    const sections = document.querySelectorAll(".tab-section");

    buttons.forEach(function (button) {
        button.addEventListener("click", function () {
            const target = button.getAttribute("data-target");

            buttons.forEach(function (btn) {
                btn.classList.remove("active");
            });

            sections.forEach(function (section) {
                section.classList.remove("active-section");
            });

            button.classList.add("active");
            document.getElementById(target).classList.add("active-section");
        });
    });
}

function setupThemeToggle() {
    const themeButton = document.getElementById("theme-toggle");

    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
    }

    themeButton.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("theme", "dark");
        } else {
            localStorage.setItem("theme", "light");
        }
    });
}

function setupContactForm() {
    const form = document.getElementById("contact-form");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");
    const formMessage = document.getElementById("form-message");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const message = messageInput.value.trim();

        formMessage.classList.remove("success", "error");

        if (name === "" || email === "" || message === "") {
            formMessage.textContent = "Please fill in all fields.";
            formMessage.classList.add("error");
            return;
        }

        formMessage.textContent = "Your message has been sent successfully.";
        formMessage.classList.add("success");
        form.reset();
    });
}

showGreeting();
setupTabs();
setupThemeToggle();
setupContactForm();
