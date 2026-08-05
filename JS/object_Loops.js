const myObject = {
    js: 'javascript',
    cpp: 'c++',
    rb: 'ruby',
    swift: 'swift by apple'
}

for (const key in myObject) {
        // console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
        // console.log(programming[key]);
}

const map = new Map()
map.set('IN', "India")
map.set('SL', "Shri Lanka")
map.set('Fr', "France")
map.set('Fr', "France")

// console.log(map);

// map is not itratable

// for (const key in map) {
//     console.log(key);
// }

