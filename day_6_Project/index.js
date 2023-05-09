const nameInput = document.getElementById("name");
const mailInput = document.getElementById("mail");
const cinInput = document.getElementById("cin");
const phoneInput = document.getElementById("phone");
const submit = document.getElementById("submit");

const table = document.querySelector("#table-list tbody");


const themeToggler = document.getElementById("themeToggler");

themeToggler.onclick = function (ev) {
    ev.preventDefault();
    let theme = document.documentElement.dataset.theme;

    document.querySelector("#themeToggler .input").classList.toggle("checked");

    console.log(theme);
    if(theme === "Dark") {
        document.documentElement.dataset.theme = "Light"
    } else {
        document.documentElement.dataset.theme = "Dark"
    }
};


for (let el of [nameInput, mailInput, cinInput, phoneInput]) {
    el.onkeyup = function (ev) {
        ev.target.style.borderColor = "black";
    }
}

function validateAndGetForm() {
    let formData = {};


    for (let el of [nameInput, mailInput, cinInput, phoneInput]) {
        if (el.value === "") {
            el.style.borderColor = "red";
            formData = null;
            break;
        }
        formData[el.getAttribute("name")] = el.value;
    }

    return formData;
}

function saveUserInfo(name, mail, cin, phone) {
    table.innerHTML += `
    <tr>
    <td>${name}</td>
    <td>${mail}</td>
    <td>${phone}</td>
    <td>${cin}</td>
    </tr>`
}

function clearForm() {
    for (let el of [nameInput, mailInput, cinInput, phoneInput]) {
        el.value = "";
    }
}

submit.onclick = function () {
    const user = validateAndGetForm();
    if(user) {
        saveUserInfo(user.name , user.mail , user.cin , user.phone)
        clearForm()
    }
};