// transform the final set of data back into CSV format.
//ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26
const origin = [
    { id: '42', name: 'Bruce', occupation: 'Knight', age: '41' },
    { id: '57', name: 'Bob', occupation: 'Fry Cook', age: '19' },
    { id: '63', name: 'Blaine', occupation: 'Quiz Master', age: '58' },
    { id: '98', name: 'Bill', occupation: "Doctor's Assistant", age: '26'}
]
const rows = origin.length;
// const cols = origin[0].length;
let str = "";

const header = Object.keys(origin[0]).map(key => key.charAt(0).toUpperCase() + key.slice(1));

str += header.join() + "\n";

for(let i = 0; i < rows; i++){
    str += Object.values(origin[i]).join() + "\n";
}
console.log(str);  
