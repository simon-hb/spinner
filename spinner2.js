const positions = ['|', '/', '-', '\\']
let x = 100;
for (let i = 0; i < 2; i++) {
  for (let position of positions) {
    setTimeout(() => process.stdout.write(`\r${position}   `), x);
    x += 200
  };
}
setTimeout(() => console.log(), x);