import "./styles.css";

const fizz = { value: 3, label: "Fizz" };
const buzz = { value: 5, label: "Buzz" };
const output = [];
function isFloat(value) {
  if (
    typeof value === "number" &&
    !Number.isNaN(value) &&
    !Number.isInteger(value)
  ) {
    return true;
  }

  return false;
}

function fizzBuzz(n) {
  for (let num = 1; num <= n; num++) {
    const divisibleBy3 = !isFloat(num / fizz.value);
    const divisibleBy5 = !isFloat(num / buzz.value);
    if (divisibleBy3 && divisibleBy5) {
      output.push(`${fizz.label} ${buzz.label}`);
    } else if (divisibleBy3) {
      output.push(`${fizz.label}`);
    } else if (divisibleBy5) {
      output.push(`${buzz.label}`);
    } else {
      output.push(num);
    }
  }

  return output;
}

document.getElementById("app").innerHTML = `
<h1>FizzBuzz!</h1>
${fizzBuzz(100).join(", ")}
`;
