document.addEventListener('DOMContentLoaded', function() {

var els = document.getElementsByClassName('content')[0].children;

    for(var i = 0; i < els.length; i++) {
        // use function call to trap loop variable ref
        addActive(els[i], (i + 1) * 700);
    }

    var emailEl = document.getElementsByClassName('email')[0];
    emailEl.href = 'm1ai456xxxppppl87pt5434xo12122:9xxxppppppppppr12xp387py464xa23x42p5n@ry6xpa5xn1pmo1p5xrri1n.com'.replace(/\d+(x+)?(p+)?/g, '');
});

function addActive (element, timeout) {

    setTimeout(function () {
        element.classList.add('active');
    },timeout);

}