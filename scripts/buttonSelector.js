let boldClickCount = 0;
let italicClickCount = 0;
let underlineClickCount = 0;
let textLeftClickCount = 0;
let textRightClickCount = 0;
let textCenterClickCount = 0;
let textJustifyClickCount = 0;
let caseCount = 0;

document.getElementById("font-bold").addEventListener("click", function () {
  boldClickCount++;
  setTextAreaClass("font-bold", boldClickCount);
});

document.getElementById("italic").addEventListener("click", function () {
  italicClickCount++;
  setTextAreaClass("italic", italicClickCount);
});

document.getElementById("underline").addEventListener("click", function () {
  underlineClickCount++;
  setTextAreaClass("underline", underlineClickCount);
});

document.getElementById("text-justify").addEventListener("click", function () {
  textJustifyClickCount++;
  setTextAreaClass("text-justify", textJustifyClickCount);
});

document.getElementById("text-left").addEventListener("click", function () {
  textLeftClickCount++;
  setTextAreaClass("text-left", textLeftClickCount);
});

document.getElementById("text-right").addEventListener("click", function () {
  textRightClickCount++;
  setTextAreaClass("text-right", textRightClickCount);
});

document.getElementById("text-center").addEventListener("click", function () {
  textCenterClickCount++;
  setTextAreaClass("text-center", textCenterClickCount);
});

document.getElementById("text").addEventListener("click", function () {
  const size = document.getElementById("text").value;
  document.getElementById("xoxo").classList.add("text-[" + size + "px]");
});

document.getElementById("uppercase").addEventListener("click", function () {
  caseCount++;
  setTextAreaClass("uppercase", caseCount);
});

document.getElementById("color").addEventListener("change", function () {
  const color = document.getElementById("color").value;
  document.getElementById("xoxo").classList.add("text-[" + color + "]");
});
