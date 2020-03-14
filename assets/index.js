// Const Elements
const tweaksDiv = document.getElementById("tweaks");
const tweakOverlay = document.getElementById("tweak_overlay");
const tweakOverlayCard = document.getElementById("tweak_overlay_card");
const tweaks = [
  {
    name : "Frame",
    description : "Bring your iDevice to life with your favourite video wallpapers!",
    version : "2.0.0",
    iconName : "ic_tweak_frame.png"
  }
]

// Funcs
function setOverlayDisplaying(tweak) {
  
}

function addTweak(tweak) {
  const contents = 
  `
  <img src="assets/icons/${tweak.iconName}" style="width: 15vw; margin-right: 16px;" />
  <div>
    <div class="tweak_name">${tweak.name}</div>
    <div class="tweak_desc">${tweak.description}</div>
  </div>
  <div class="tweak_version">${tweak.version}</div>
  `;
  const newTweakDiv = document.createElement("div");
  newTweakDiv.classList.add("tweak_card");
  newTweakDiv.innerHTML = contents;
  newTweakDiv.onclick = () => {
    // Update overlay to display the selected tweak.
    setOverlayDisplaying(tweak);
    // Show overlay.
    tweakOverlay.classList.remove("hidden");
    tweakOverlayCard.classList.remove("hidden_below");
  };
  tweaksDiv.appendChild(newTweakDiv);
}

// Add tweaks to display.
tweaks.forEach(addTweak);

// Configure overlay.
tweakOverlay.onclick = () => {
  tweakOverlayCard.classList.add("hidden_below");
  tweakOverlay.classList.add("hidden");
};