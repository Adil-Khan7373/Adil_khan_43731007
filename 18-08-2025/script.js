// script.js

const box = document.getElementById("box");

// controls
const marginRange = document.getElementById("marginRange");
const borderRange = document.getElementById("borderRange");
const paddingRange = document.getElementById("paddingRange");

const marginValue = document.getElementById("marginValue");
const borderValue = document.getElementById("borderValue");
const paddingValue = document.getElementById("paddingValue");

// create live size readout
const sizeDisplay = document.createElement("p");
sizeDisplay.style.fontWeight = "bold";
sizeDisplay.style.marginTop = "10px";
document.querySelector(".controls").appendChild(sizeDisplay);

function updateBox() {
  // apply styles
  box.style.margin = marginRange.value + "px";
  box.style.borderWidth = borderRange.value + "px";
  box.style.padding = paddingRange.value + "px";

  // update values beside sliders
  marginValue.textContent = marginRange.value + "px";
  borderValue.textContent = borderRange.value + "px";
  paddingValue.textContent = paddingRange.value + "px";

  // calculate actual rendered size
  const rect = box.getBoundingClientRect();
  sizeDisplay.textContent = `Live Box Size: ${Math.round(rect.width)}px × ${Math.round(rect.height)}px`;
}

// run once on load
updateBox();

// event listeners
marginRange.addEventListener("input", updateBox);
borderRange.addEventListener("input", updateBox);
paddingRange.addEventListener("input", updateBox);
