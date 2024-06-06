const str = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,QuizMaster,58\n98,Bill,Doctor's Assistant,26";
let newArray = [];
let row = [];
let j = 0;
let cell = "";
for(let i = 0; i < str.length; i++) {
    if(str[i] === ",") {
        row.push(cell);
        cell = "";
        continue;
    }else if(str[i] === "\n" ) {

        // newArray[j] = str.slice(n, i);
        // // newArray[j].push(str.slice(n, i));
        // n = i + 1;
        row.push(cell);
        newArray.push(row);
        row = [];
        cell ="";
        // j++;
    }else {
        cell += str[i];
    }
    
}

row.push(cell);
newArray.push(row);
console.log(newArray);