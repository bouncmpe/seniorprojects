// bootstrap
require("bootstrap/dist/js/bootstrap.min")

// lazysize
require("lazysizes")

// lunr
window.lunr = require('lunr');
require("js/lunr.unicodeNormalizer.js")(window.lunr);

// lightgallery
window.lightGallery = require("lightgallery")
window.lgZoom = require("lightgallery/plugins/zoom")
window.lgVideo = require("lightgallery/plugins/video")

// get index for search
async function initSearchIndex() {
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