const CWD = process.cwd();
console.log(CWD)
const fs = require('fs');
const lunr = require('lunr');
require(CWD + "/assets/js/lunr.unicodeNormalizer.js")(lunr);

async function initSearchIndex() {
    try {
        fs.readFile(CWD + "/public/index.json", "utf8", (err, data) => {
            if (err) {
                console.error(err);
                return;
            }
            const pagesIndex = JSON.parse(data);
            const searchIndex = lunr(function () {
                if (!(pagesIndex && Array.isArray(pagesIndex) && pagesIndex.length > 0)) {
                    return;
                }

                this.field("title");
                this.field("content");
                this.field("advisors");
                this.field("students");
                this.ref("href");

                pagesIndex.forEach((page) => {
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

            fs.writeFile(CWD + '/static/searchIndex.json', JSON.stringify(searchIndex), (err) => {
                if (err) {
                    console.error(err);
                    return;
                }
            });

            fs.writeFile(CWD + '/static/pagesIndex.json', JSON.stringify(pagesIndex), (err) => {
                if (err) {
                    console.error(err);
                    return;
                }
            });
        });

    } catch (e) {
        console.log(e);
    }
}

initSearchIndex();