const title = document.getElementById("title");
// const text = document.getElementById("paragraph");
// text.setAttribute("class" , "myParagraph")

title.setAttribute("id" , `${title.getAttribute("id")} header`)

const paragraphs = document.getElementsByTagName("p");

for (let key in paragraphs) {
    if(key === 2) break;
    paragraphs[key].setAttribute("class" , `p-${key}`)
}