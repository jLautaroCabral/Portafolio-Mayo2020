const $faceMain = document.getElementById('faceMain');
const $videoBackground = document.getElementById('background_video');

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
        easing: 'ease-in-out',
        fill: 'forwards'
    })
    backgroundTo(String);
}
function fromToCenter(String) {
    $faceMain.animate
    ([
        //from
        {
            transform: String
        },
        // to
        {
            transform: 'translateX(0)'
        }
    ],
    {
        duration: 1200,
        easing: 'ease-in-out',
        fill: 'forwards'
    })
    backgroundFromToCenter(String);
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
        easing: 'ease-in-out',
        fill: 'forwards'
    })
}
function backgroundFromToCenter(String) {
    
    $videoBackground.animate
    ([
        //from
        {
            transform: `${String} scale(3)`
        },
        // to
        {
            transform: `translateX(0) scale(3)`
        }
    ],
    {
        duration: 1200,
        easing: 'ease-in-out',
        fill: 'forwards'
    })
}


const $backEndButton = document.getElementById('backEndButton');
const $frontEndButton = document.getElementById('frontEndButton');
const $devButton = document.getElementById('devButton');
const $othersButton = document.getElementById('othersButton');

const $leftToCenterButton = document.getElementById('leftToCenterButton');
const $downToCenterButton = document.getElementById('downToCenterButton');
const $upToCenterButton = document.getElementById('upToCenterButton');
const $rightToCenterButton = document.getElementById('rightToCenterButton');
        
$backEndButton.addEventListener('click', () => centerTo('translateX(-100%)'));
$frontEndButton.addEventListener('click', () => centerTo('translateX(100%)'));
$devButton.addEventListener('click', () => centerTo('translateY(100%)'));
$othersButton.addEventListener('click', () => centerTo('translateY(-100%)'));

$leftToCenterButton.addEventListener('click', () => fromToCenter('translateX(100%)'));
$downToCenterButton.addEventListener('click', () => fromToCenter('translateY(-100%)'));
$upToCenterButton.addEventListener('click', () => fromToCenter('translateY(100%)'));
$rightToCenterButton.addEventListener('click', () => fromToCenter('translateX(-100%)'));