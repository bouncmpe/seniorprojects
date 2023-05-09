require("js/bootstrap")
window.lunr = require('lunr');

async function initSearchIndex() {
  console.log(await import("js/lunr.unicodeNormalizer.js"));
  try {
    const response = await fetch("/searchIndex.json");
    window.searchIndex = lunr.Index.load(await response.json());
    const _response = await fetch("/pagesIndex.json");
    window.pagesIndex = await _response.json();
  } catch (e) {
    console.log(e);
  }
}

initSearchIndex();