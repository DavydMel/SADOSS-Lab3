import "core-js/actual/array/group-by";

const $app = document.getElementById("app");

const pets = [
    { name: 'Max', type: 'dog' },
    { name: 'Buddy', type: 'dog' },
    { name: 'Molly', type: 'cat' },
    { name: 'Charlie', type: 'dog' },
    { name: 'Lucy', type: 'cat' },
    { name: 'Daisy', type: 'dog' }
];

const groupedPets = pets.groupBy(pet => pet.type);

function output(inp, preText) {
    let elem = document.createElement('pre');
    elem.innerHTML = preText + "\n" + inp;
    $app.appendChild(elem);
}

function syntaxHighlight(json) {
    json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
        let cls = 'number';
        if (/^"/.test(match)) {
            if (/:$/.test(match)) {
                cls = 'key';
            } else {
                cls = 'string';
            }
        } else if (/true|false/.test(match)) {
            cls = 'boolean';
        } else if (/null/.test(match)) {
            cls = 'null';
        }
        return '<span class="' + cls + '">' + match + '</span>';
    });
}

let obj = JSON.stringify(pets, undefined, 4);
let pretext = "Before proposal array grouping:"
output(syntaxHighlight(obj), pretext);

obj = JSON.stringify(groupedPets, undefined, 4);
pretext = "After proposal array grouping:"
output(syntaxHighlight(obj), pretext);
