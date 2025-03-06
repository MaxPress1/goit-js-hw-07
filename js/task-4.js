const formUser = document.querySelector(".login-form");

formUser.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const post = form.elements.email.value.trim();
    const pas = form.elements.password.value.trim();
    const user = { email: post, password: pas}

    if (post === "" || pas === "") {
    return alert("All form fields must be filled in");
    }
    
    console.log(user);
    formUser.reset();
}

const btn = document.querySelector("button");
btn.addEventListener("mouseenter", function () {
    btn.style.backgroundColor = "#6c8cff";
})

btn.addEventListener("mouseleave", function () {
    btn.style.backgroundColor = "";
})

const input = document.querySelectorAll("input");
input.forEach(input => {
    input.addEventListener("focus", function () {
        input.style.borderColor = "#000";
        input.placeholder = "";
    });

    input.addEventListener("blur", function () {
        input.style.borderColor = "";
        input.placeholder = "Type text";
    });
    
    
});