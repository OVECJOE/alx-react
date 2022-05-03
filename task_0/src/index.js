const $ = require("jquery");

const array = [
    'Holberton Dashboard',
    'Dashboard data for the students',
    'Copyright - Holberton School'
]

array.forEach((elem) => {
    const p = $(`<p>${elem}</p>`);
    $("body").append(p);
})
