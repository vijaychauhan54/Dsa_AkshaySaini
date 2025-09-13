// 4 by 4 start pattern
for (let i = 0; i < 4; i++) {
  // i is responsible for rows
  let row = "";
  for (let j = 0; j < 4; j++) {
    // j is responsible for columns
    row = row + "* ";
  }
  console.log(row);
}

for (let i = 0; i < 4; i++) {
  // i is responsible for rows
  let row = "";
  for (let j = 0; j <= i; j++) {
    // j is responsible for columns
    row = row + "* ";
  }
  console.log(row);
}
//*
// * *
// * * *
// * * * *

// 1
//1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5

for (let i = 0; i < 5; i++) {
  // row
  let row = "";
  for (let j = 0; j <= i; j++) {
    // column
    row = row + (j + 1);
  }
  console.log("patterhn", row);
}

// 1
//2 2
// 3 3 3
// 4 4 4 4
// 5 5 5 5 5

for (let i = 0; i < 5; i++) {
  // row
  let row = "";
  for (let j = 0; j <= i; j++) {
    row = row + (i + 1);
  }
  console.log("patterhn", row);
}

// 1 2 3 4 5
// 1 2 3 4
// 1 2 3
// 1 2
// 1
let n = 5;
for(let i = 0; i < n;i++){
  let row = "";
  for(j = 0; j<n-i; j++){
    row = row + (j+1);
  }
  console.log(row);
}
