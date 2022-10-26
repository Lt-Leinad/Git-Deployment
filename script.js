const h1 = document.querySelector("h1");
const colorFunc = function (str) {
  let rainbow = [
    "red",
    "orangered",
    "orange",
    "yellow",
    "lightgreen",
    "white",
    "green",
    "blue",
  ];
  rainbow.concat(rainbow);
  [...str.textContent].forEach(
    (x, i) => (str.innerHTML += `<h1 style="color: ${rainbow[i]}">${x}</h1>`)
  );
};

colorFunc(h1);
console.log(h1);
