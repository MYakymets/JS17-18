document.addEventListener('DOMContentLoaded', (function () {

    var lastLine = document.getElementById('last_line');
    l_find_h = lastLine.querySelector('h3');

    l_find_h.addEventListener('mouseover', function () {
        l_find_h.style.fontSize = "36px";
        lastLine.style.backgroundColor = "green";
    });

})
);
