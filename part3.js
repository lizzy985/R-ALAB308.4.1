const origin = [["ID", "Name", "Occupation", "Age"], ["42", "Bruce", "Knight", "41"], ["57", "Bob", "Fry Cook", "19"], ["63", "Blaine", "Quiz Master", "58"], ["98", "Bill", "Doctor's Assistant", "26"]];

// [{ id: "42", name: "Bruce", occupation: "Knight", age: "41" },{ id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },{ id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },{ id: "98", name: "Bill", occupation: "Doctor’s Assistant", age: "26" }]

const rows = origin.length;
const cols = origin[0].length;
let newArray = [];
let row = [];
let n = 0;
for(let i = 1; i < rows; i++) {
    let obj = {};
    for(let j = 0; j < cols; j++){
        // newArray[i-1][origin[0][j]].push(origin[i][j]);
        obj[origin[0][j].toLowerCase()] = origin[i][j];
    }
    newArray.push(obj);

}
console.log(newArray);