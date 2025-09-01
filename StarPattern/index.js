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
