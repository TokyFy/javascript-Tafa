let persons = [
    {
        firstName : "John",
        lastName : "Doe",
        age : 22,
        cin : 1234567890,
        address : "123 Main St",
        sexe : "Male"
    },
    {
        firstName : "Jane",
        lastName : "Doe",
        age : 28,
        cin : 987654321,
        address : "456 Elm St",
        sexe : "Female"
    },
    {
        firstName : "Michael",
        lastName : "Johnson",
        age : 35,
        cin : 5555555555,
        address : "789 Maple Ave",
        sexe : "Male"
    },
    {
        firstName : "Sarah",
        lastName : "Williams",
        age : 45,
        cin : 1111111111,
        address : "987 Oak St",
        sexe : "Female"
    },
    {
        firstName : "David",
        lastName : "Smith",
        age : 27,
        cin : 2222222222,
        address : "654 Pine St",
        sexe : "Male"
    },
    {
        firstName : "Emily",
        lastName : "Taylor",
        age : 31,
        cin : 3333333333,
        address : "321 Cedar St",
        sexe : "Female"
    },
    {
        firstName : "Robert",
        lastName : "Brown",
        age : 19,
        cin : 4444444444,
        address : "987 Birch Rd",
        sexe : "Male"
    },
    {
        firstName : "Ashley",
        lastName : "Jackson",
        age : 42,
        cin : 5555555555,
        address : "654 Elm St",
        sexe : "Female"
    },
    {
        firstName : "Daniel",
        lastName : "Garcia",
        age : 29,
        cin : 6666666666,
        address : "321 Oak St",
        sexe : "Male"
    },
    {
        firstName : "Amanda",
        lastName : "Davis",
        age : 37,
        cin : 7777777777,
        address : "654 Cedar St",
        sexe : "Female"
    },
    {
        firstName : "Christopher",
        lastName : "Wilson",
        age : 26,
        cin : 8888888888,
        address : "123 Pine St",
        sexe : "Male"
    },
    {
        firstName : "Rachel",
        lastName : "Moore",
        age : 39,
        cin : 9999999999,
        address : "456 Maple Ave",
        sexe : "Female"
    },
    {
        firstName : "Joshua",
        lastName : "Lee",
        age : 23,
        cin : 1231231234,
        address : "789 Pine St",
        sexe : "Male"
    },
    {
        firstName : "Lauren",
        lastName : "Taylor",
        age : 32,
        cin : 2342342345,
        address : "987 Maple Ave",
        sexe : "Female"
    },
    {
        firstName : "Kevin",
        lastName : "Davis",
        age : 41,
        cin : 3453453456,
        address : "654 Cedar St",
        sexe : "Male"
    },
    {
        firstName: "Emma",
        lastName: "Smith",
        age: 26,
        cin: 4567890123,
        address: "123 Main St",
        sexe: "Female"
    },
    {
        firstName: "Matthew",
        lastName: "Brown",
        age: 29,
        cin: 987654321,
        address: "456 Elm St",
        sexe: "Male"
    },
    {
        firstName: "Olivia",
        lastName: "Garcia",
        age: 24,
        cin: 1111111111,
        address: "789 Maple Ave",
        sexe: "Female"
    },
    {
        firstName: "William",
        lastName: "Wilson",
        age: 38,
        cin: 2222222222,
        address: "987 Oak St",
        sexe: "Male"
    }
]

const stats = {
    averageAge : 0,
    maleNumber : 0,
    femaleNumber : 0
}

const table = document.querySelector(".allData tbody");

for(let i=0 ; i < persons.length ; i++) {

    stats.averageAge += persons[i].age;
    persons[i].sexe === "Female" ? stats.femaleNumber++ : stats.maleNumber++;

    if(i === persons.length - 1) {
      stats.averageAge /= persons.length;
    }

  const template = document.getElementById("template").cloneNode(true);
    for(const key in persons[i]) {
        template.querySelector(`.${key}`).innerText = persons[i][`${key}`];
    }
  table.appendChild(template);
}

document.querySelector(".allData tbody:last-child").remove()

document.querySelector(".stats")
    .innerText = `Average Age : ${Math.ceil(stats.averageAge)} / M : ${stats.maleNumber} pers / F : ${stats.femaleNumber} pers `;