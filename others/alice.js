const aliceTumbling = [
  { transform: "rotate(0) translate3D(-50%, -50%, 0)", color: "#fff" },
  { color: "#fff", offset: 0.1 },
  { transform: "rotate(360deg) translate3D(-50%, -50%, 0)", color: "#fff" },
];


const aliceTiming = {
  duration: 2,
  iterations: 1,
  fill: "farword",
};

const alice1 = document.querySelector("#alice1");
const alice2 = document.querySelector("#alice2");
const alice3 = document.querySelector("#alice3");

alice1.animate(aliceTumbling, aliceTiming);
