function copyLink(filename) {
    navigator.clipboard.writeText("media.securinets.tn/" + filename);
    const notification = document.getElementById("notification");
    notification.style.display = "block";
    setTimeout(() => {
        notification.style.display = "none";
    }, 2000);
}

function downloadFile(filename) {
    const link = document.createElement("a");
    link.href = filename;
    link.download = filename.split("/").pop();
    link.click();
}

const files = [
    { name: "Securinets Logo PNG", path: "logo.png" },
    { name: "Securinets Logo SVG", path: "logo.svg" },
    { name: "Website Favicon", path: "favicon.png" },
    { name: "Darkest Hour Event", path: "darkesthour.png" },
    { name: "GoTrust Partnership", path: "gotrust.avif" },
    { name: "ITA Conference", path: "ita.jpg" },
    { name: "Event Cover Photo", path: "cover.jpg" },
    { name: "INSAT University Logo", path: "insat.png" },
    { name: "Securinets Blue Logo", path: "securinets-blue.png" },
    { name: "Securinets Red Logo", path: "securinets-red.jpg" }
];

const assetListElement = document.getElementById("asset-list");

files.forEach((file) => {
    const listItem = document.createElement("li");
    listItem.classList.add("asset-item");
    listItem.innerHTML = `
    <div class="asset-preview">
      <img src="${file.path}" alt="Asset Preview">
    </div>
    <div class="asset-details">
      <div class="asset-name">${file.name}</div>
    </div>
    <div class="buttons">
      <button class="btn" onclick="copyLink('${file.path}')">
        <i class="fas fa-copy"></i>
      </button>
      <button class="btn btn-download" onclick="downloadFile('${file.path}')">
        <i class="fas fa-download"></i>
      </button>
    </div>
  `;
    assetListElement.appendChild(listItem);
});
