function setTextAreaClass(buttonId, boldClickCount) {
  let enable = false;
  if (boldClickCount % 2 === 1) {
    enable = true;
  }
  if (enable) {
    document.getElementById("xoxo").classList.add(buttonId);
    document.getElementById(buttonId).classList.add("bg-black");
  }
  if (!enable) {
    document.getElementById("xoxo").classList.remove(buttonId);
    document.getElementById(buttonId).classList.remove("bg-black");
  }
}
