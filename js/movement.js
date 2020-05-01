const $faceMain = document.getElementById('faceMain');
const $videoBackground = document.getElementById('video');

function centerTo(String) {
    $faceMain.animate
    ([
        //from
        {
            transform: 'translateX(0)'
        },
        // to
        {
            transform: String
        }
    ],
    {
        duration: 1200,
        easing: 'ease-in',
        fill: 'forwards'
    })
    backgroundTo(String);
}
function backgroundTo(String) {
    $videoBackground.animate
    ([
        //from
        {
            transform: 'translateX(0) scale(3)'
        },
        // to
        {
            transform: `${String} scale(3)`
        }
    ],
    {
        duration: 1200,
        easing: 'ease-in',
        fill: 'forwards'
    })
}


let $backEndButton = document.getElementById('backEndButton');
let $frontEndButton = document.getElementById('frontEndButton');
let $devButton = document.getElementById('devButton');
let $othersButton = document.getElementById('othersButton');
        
$backEndButton.addEventListener('click', () => centerTo('translateX(-100%)'));
$frontEndButton.addEventListener('click', () => centerTo('translateX(100%)'));
$devButton.addEventListener('click', () => centerTo('translateY(100%)'));
$othersButton.addEventListener('click', () => centerTo('translateY(-100%)'));