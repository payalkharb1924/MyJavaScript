const obj = {
    js: "JavaScript",
    cpp: "C++",
    py: "Python",
    rb: "Ruby"
}

for (const key in obj) {
    // console.log(key);
    // console.log(obj[key]);  // this will give values of keys
    // console.log(`${key} for ${obj[key]} language`);

}

const coding = ["js","py","cpp"]
for (const key in coding) {
    // console.log(coding[key]);
}


const map = new Map()
map.set('In','India')
map.set('USA','America')
map.set('In','India')

for (const key in map) {
    console.log(key);
    // maps are not iterable
}

