// Const Elements
const mainElements = {
  main : document.getElementById("main"),
  tweaksDiv : document.getElementById("tweaks"),
  tweakOverlayCard : document.getElementById("tweak_overlay_card")
};

const modalElements = {
  closeButton : document.getElementById("close_btn"),
  tweakIcon : document.getElementById("tweak_icon"),
  tweakName : document.getElementById("tweak_name"),
  tweakSubtitle : document.getElementById("tweak_subtitle"),
  tweakGet : document.getElementById("tweak_get"),
  tweakMiscs : document.getElementById("tweak_miscs"),
  tweakScreens : document.getElementById("tweak_screens"),
  tweakDescriptions : document.getElementById("tweak_descriptions")
}

let iOSVersion;

// Detect the iOS version.
if (navigator.appVersion.indexOf("iPhone OS") != -1) {
  // Extract browser/iOS version from navigator.
  iOSVersion = navigator.appVersion.match(/iPhone OS (\d+_\d_?(\d)?)/)[1].split("_").map(x => parseInt(x));
}
else if (navigator.appVersion.indexOf("iPad;") != -1) {
  iOSVersion = navigator.appVersion.match(/CPU OS (\d+_\d_?(\d)?) like/)[1].split("_").map(x => parseInt(x));
}
else if (navigator.appVersion.indexOf('Macintosh') != -1 && 'ontouchend' in document) {
  // Bug iPad user to disable request desktop site.
  alert("Please disable Request Desktop Site on your iDevice.");
  document.body.innerHTML = "This site will not function as expected on an iDevice with Request Desktop Site enabled.<br><br>Please choose Request Mobile Site instead.";
  throw "JS Exec Killed!";
}
// Fill 0 if needed.
if (iOSVersion && iOSVersion.length == 2) {
  iOSVersion.push(0);
}

// -1 if v1 is smaller, 0 if equal, 1 if v1 is larger.
function compareVersions(v1, v2) {
  for(let i = 0; i < 3; i++)
    if (v1[i] < v2[i])
      return -1;
    else if (i == 2 && v1[i] == v2[i])
    // Reached the end but still equal.
      return 0;
  return 1;
}

// Shorthand function for comparing a version to the current device's version,
// returns 1 if the current device's iOS version cannot be read.
function comparedToCurrentVersion(v) {
  if (!iOSVersion)
    return 1;
  return compareVersions(v, iOSVersion);
}

// Funcs

var removeChildren = function (node) {
  let last;
  while (last = node.lastChild)
    node.removeChild(last);
};

// Update the contents of the overlay with the given tweak info.
function setOverlayDisplaying(tweak) {
  const details = tweak.details;
  modalElements.tweakIcon.src = `./assets/icons/${tweak.id}.png`;
  modalElements.tweakName.textContent = tweak.name;
  modalElements.tweakSubtitle.textContent = tweak.details.subtitle;

  // Determine which package should be served, or none at all.
  // Can't believe I'm actually doing this lol.
  for(let i in details.packages) {
    // Check if minOSVersion is smaller than current version.
    // It is required that the packages are listed in descending order of minOSVersion
    // for this to pick the best package for each version.
    const minOSVersion = details.packages[i].minOSVersion;
    if (comparedToCurrentVersion(minOSVersion) == -1) {
      const id = details.packages[i].id;
      modalElements.tweakGet.href = `cydia://url/https://cydia.saurik.com/api/share#?source=https://zerui18.github.io/zx02/&package=${id}`;
      modalElements.tweakGet.classList.remove("red");
      modalElements.tweakGet.textContent = "Get";
      break;
    }
    else if (i == details.packages.length-1) {
      // Reached last element but no match, incompatible.
      modalElements.tweakGet.attributes.href = '';
      modalElements.tweakGet.classList.add("red");
      modalElements.tweakGet.textContent = "Incompatible";
    }
  }

  // Clear miscs.
  const miscsElement = modalElements.tweakMiscs;
  removeChildren(miscsElement);
  // Create new miscs.
  details.miscs.forEach(text => {
    const misc = document.createElement("div");
    misc.classList.add("tweak_misc");
    misc.textContent = text;
    miscsElement.appendChild(misc);
  });

  // Clear screens.
  const screensElement = modalElements.tweakScreens;
  removeChildren(screensElement);
  // Create new screens.
  // Beginning with demo video.
  if (details.embedVideoURL) {
    const iframe = document.createElement("iframe");
    iframe.src = details.embedVideoURL;
    iframe.frameBorder = 0;
    iframe.classList.add("tweak_screen");
    iframe.id = "tweak_demo";
    screensElement.appendChild(iframe);
  }

  // Then add the actual screenshots.
  for (let i = 0; i < details.nScreenshots; i++) {
    const img = document.createElement("img");
    img.src = `./assets/screenshots/${tweak.id}/${i}.png`;
    img.classList.add("tweak_screen");
    screensElement.appendChild(img);
  }

  // Clear descriptions
  const descriptionsElement = modalElements.tweakDescriptions;
  removeChildren(descriptionsElement);
  // Add descriptions
  details.descriptions.forEach(description => {
    // Add break
    const breakElement = document.createElement("div");
    breakElement.classList.add("break");
    descriptionsElement.appendChild(breakElement);

    // Add heading
    const headingElement = document.createElement("div");
    headingElement.classList.add("tweak_heading");
    headingElement.textContent = description.title;
    descriptionsElement.appendChild(headingElement)

    // Add description
    const descriptionElement = document.createElement("div");
    descriptionElement.classList.add("tweak_para");
    descriptionElement.innerHTML = description.html;
    descriptionsElement.appendChild(descriptionElement);
  });
}


// Add a bubble in the main page for the given tweak info.
function addTweak(tweak) {
  const contents = 
  `
  <img src="./assets/icons/${tweak.id}.png" style="width: 15vw; margin-right: 16px;" />
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
    mainElements.tweakOverlayCard.classList.remove("hidden");
    mainElements.main.classList.add("modal_shown");
  };
  console.log('appending child');
  mainElements.tweaksDiv.appendChild(newTweakDiv);
}

// Add tweaks to display.
TWEAKS.forEach(addTweak);

// Configure overlay.
modalElements.closeButton.onclick = () => {
  mainElements.tweakOverlayCard.classList.add("hidden");
  mainElements.main.classList.remove("modal_shown");
};