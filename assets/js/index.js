function loadScript(url, callback) {
    var head = document.head;
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;

    // Then bind the event to the callback function.
    // There are several events for cross browser compatibility.
    script.onreadystatechange = callback;
    script.onload = callback;

    // Fire the loading
    head.appendChild(script);
}

function initMasonry() {
    const grid = document.querySelector(".projects-grid")
    if(grid) {
       var msnry = new Masonry(grid, {
            itemSelector: 'a',
            columnWidth: '.grid-sizer',
            horizontalOrder: true
        });

        imagesLoaded( '.projects-grid' ).on( 'progress', function() {
            // layout Masonry after each image loads
            msnry.layout();
        }); 
    }
}

loadScript("/js/lib/masonry.pkgd.min.js", initMasonry)
