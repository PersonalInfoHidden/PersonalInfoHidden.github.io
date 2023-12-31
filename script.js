const cPath = (dir) => {
    return `/${dir}/answers.html`;
};

const navElements = [
    ["Home", "/"],
    ["History", cPath("history")],
    ["Http", cPath("http")],
    ["Tags", cPath("tags")],
    ["Validation", cPath("validation")],
    ["Lagar", cPath("lagar")],
    ["Textformatering", cPath("textformatering")],
];

let navUl = document.getElementById("navUl");
navUl.innerHTML = "";

navElements.forEach((value) => {
    navUl.innerHTML += `<li><a href="${value[1]}">${value[0]}</a></li>`;
});
