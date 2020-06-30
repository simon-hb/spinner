const returnID = setInterval(() => {
  process.stdout.write('\r|   ')
  setTimeout(() => process.stdout.write('\r/   '), 200);
  setTimeout(() => process.stdout.write('\r-   '), 400);
  setTimeout(() => process.stdout.write('\r\\   '), 600);
  setTimeout(() => process.stdout.write('\r|   '), 800);
  }, 800);
setTimeout(() => clearInterval(returnID), 2400);
setTimeout(() => console.log(), 2500);