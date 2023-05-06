require("js/bootstrap")

async function initSearchIndex() {
  try {
    const response = await fetch("/index.json");
    window.pagesIndex = await response.json();
    window.searchIndex = lunr(function () {
      if (!(window.pagesIndex && Array.isArray(window.pagesIndex) && window.pagesIndex.length > 0)) {
        return;
      }

      this.field("title");
      this.field("content");
      this.field("advisors");
      this.field("students");
      this.ref("href");

      window.pagesIndex.forEach((page) => {
        const _page = {};
        Object.keys(page).forEach(key => {
          const obj = page[key]
          if (!(obj === null || obj === undefined)) {
            if (Array.isArray(obj)) {
              if (obj.length > 0) {
                _page[key] = obj.map(function (t) {
                  return lunr.unicodeNormalizer(t);
                }).join(" ");
              }
            }
            else {
              _page[key] = lunr.unicodeNormalizer(obj.toString());
            }
          }
        })
        this.add(_page)
      });
    });
  } catch (e) {
    console.log(e);
  }
}

initSearchIndex();