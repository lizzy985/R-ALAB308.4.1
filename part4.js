// Remove the last element from the sorted array.
// Insert the following object at index 1:
// { id: "48", name: "Barry", occupation: "Runner", age: "25" }
// Add the following object to the end of the array:
// { id: "7", name: "Bilbo", occupation: "None", age: "111" }

//res = [{ id: "42", name: "Bruce", occupation: "Knight", age: "41" }, { id: "48", name: "Barry", occupation: "Runner", age: "25" }, { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" }, { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" }, { id: "7", name: "Bilbo", occupation: "None", age: "111" }]

  const origin = [
    { id: '42', name: 'Bruce', occupation: 'Knight', age: '41' },
    { id: '57', name: 'Bob', occupation: 'Fry Cook', age: '19' },
    { id: '63', name: 'Blaine', occupation: 'Quiz Master', age: '58' },
    {
      id: '98',
      name: 'Bill',
      occupation: "Doctor's Assistant",
      age: '26'
    }
  ]

  origin.pop();
  origin.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" });

  origin.splice(1, 0, { id: "48", name: "Barry", occupation: "Runner", age: "25" });
  console.log(origin);