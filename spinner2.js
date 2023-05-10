const spinner = ['|', '/', '-', '\\', '|', '/', '-', '/n'];

process.stdout.write('hello from spinner1.js... \rheyyy\n');

let time = 100;

for (const element of spinner) {
  setTimeout(() => {
    process.stdout.write(`\r${element}   `);
  }, time);
  time += 200;
}
