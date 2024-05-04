const inputColors = document.querySelectorAll(".colors input");
const gradientBox = document.querySelector(".gradient-box");
const  selectBox= document.querySelector(".select-box select");
const textarea = document.querySelector("textarea");
const copyBtn = document.querySelector(".copy button");

const gradientGenerator = () => {
  const gradient = `linear-gradient(${selectBox.value}, ${inputColors[0].value}, ${inputColors[1].value})`;
gradientBox.style.background=gradient;
textarea.value=`background: ${gradient}`
  console.log(gradient);
};
const copyCode = () => {
    navigator.clipboard.writeText(textarea.value);
    copyBtn.innerText = "Code copied";
    setTimeout(() => {
      copyBtn.innerText = "Copy code";}, 1600);
  };

inputColors.forEach((input) => {
  input.addEventListener("input", gradientGenerator);
});
selectBox.addEventListener("change", gradientGenerator)
