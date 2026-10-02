const shopButton = document.getElementById("shopButton");
const message = document.getElementById("message");

shopButton.addEventListener("click", function () {
    document.getElementById("products").scrollIntoView({
        behavior: "smooth"
    });

    message.textContent = "Тауарлар бөліміне қош келдіңіз! 🛍️";
});

const form = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    if (name === "" || email === "") {
        formMessage.textContent = "Өтінемін, барлық жолды толтырыңыз.";
    } else {
        formMessage.textContent =
            "Рақмет, " + name + "! Хабарламаңыз қабылданды. 💗";
    }
});
