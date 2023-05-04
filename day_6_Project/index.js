const nameInput = document.getElementById("name");
const mailInput = document.getElementById("mail");
const cinInput = document.getElementById("cin");
const phoneInput = document.getElementById("phone");
const submit = document.getElementById("submit");

[nameInput , mailInput , cinInput , phoneInput].forEach(
    el => {
        el.onkeyup = function (ev) {
            document.getElementById(`p-${el.getAttribute("id")}`).innerText =
                ev.target.value
            el.style.borderColor = "black"
        }
    }
)

function validateForm() {
    [nameInput , mailInput , cinInput , phoneInput].forEach(
        el => {
            if(el.value === "") {
                el.style.borderColor = "red"
            }
        }
    )
}

submit.onclick = validateForm;