const spinnerArray = ["|", "/", "-", "\\", "|", "/", "-", "\\", "|"];
let delay = 0;
for (let i in spinnerArray) {
  setTimeout(() => {
    process.stdout.write(`\r${spinnerArray[i]}      `);
  }, delay);
  delay += 200;
}
