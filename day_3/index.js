const table = document.querySelector("table");

for(let i = 0 ; i < 100 ; i++) {
    table.innerHTML += `<tr><td>${i}</td><td>${i}</td></tr>`;
}
