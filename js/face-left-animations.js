/////////////////////////////////////////////// Animacion Boton 1
let $buttonExample1 = document.getElementById('buttonExample1');

$buttonExample1.addEventListener('click', () => {
    $buttonExample1.style.animationPlayState = 'running';
});
$buttonExample1.addEventListener('animationiteration', () => {
    $buttonExample1.style.animationPlayState = 'paused';
});

/////////////////////////////////////////////// Animacion Boton 2
let $buttonExample2 = document.getElementById('buttonExample2');
let $eyeanimations = document.querySelectorAll('#eyeanimation');

for (let i = 0; i < $eyeanimations.length; i++) {
    $eyeanimations[i].addEventListener('click', (ev) => {
        console.log('click');
        $eyeanimations[i].classList.toggle('eyesopen');
        ev.stopImmediatePropagation();
    });
}

$buttonExample2.addEventListener('click', () => {
    console.log('click');
    $eyeanimations.forEach(element => element.classList.toggle('eyesopen'));
}, false);


/////////////////////////////////////////////// Animacion Boton 3
let $buttonExample3 = document.getElementById('buttonExample3');

let $submarine__hatch = document.getElementById('submarine-hatch');
let $submarine__periscope = document.getElementById('submarine-periscope');
let $submarine__tail = document.getElementById('submarine-tail');
let $submarine__aleta = document.getElementById('submarine-aleta');
let $submarine__windows = document.querySelectorAll('#submarine-windows .window');

// Submarine Keyframes Options START

let optionsSubmarineDownKeyFrames = {
    easing: 'cubic-bezier(0,.01,0,.98)',
    fill: 'forwards',
    duration: 1000
};

let optionsSubmarineFloatKeyFrames = {
    iterations: Infinity,
    easing: 'ease-in-out',
    direction: 'alternate',
    duration: 2000,
};
let optionsSubmarineGoKeyFrames = {
    duration: 7000,
    delay: 3500,
    fill: 'forwards',
    easing: 'ease-in-out'
};
// Submarine Keyframes Options END

// Submarine__Items Keyframes Options START
function createOptionsKeyFrames(AnimationDelay, AnimationDuration = 1000) {
    return {
        delay: AnimationDelay,
        duration: AnimationDuration,
        easing: 'cubic-bezier(.8,.95,.59,1.21)',
        fill: 'forwards'
    }
}

let optionsSubmarine__ItemKeyFrames = createOptionsKeyFrames(1000);
let optionsSubmarine__Windows = new Array($submarine__windows.length);

// K es igual al delay entre animaciones, K se incrementa en cada iteración
for (let i = 0, k = 1000; i < optionsSubmarine__Windows.length; i++, k += 100 ){
    optionsSubmarine__Windows[i] = createOptionsKeyFrames(k, 200);
}

let optionsSubmarine__Aleta = {
    duration: 300,
    delay: 3000,
    iterations: Infinity,
    easing: 'ease-in'
}
// Submarine__Items Keyframes Options END

// Submarine KeyFrames START
let submarineDownKeyframes = new KeyframeEffect( 
    $buttonExample3,
    [
      { transform: 'translateY(0%)' }, 
      { transform: 'translateY(200%)' } 
    ], 
    optionsSubmarineDownKeyFrames 
);

let submarineFloatKeyframes = new KeyframeEffect( 
    $buttonExample3,
    [
      { transform: 'translateY(200%)' }, // keyframe 
      { transform: 'translateY(280%)' } // keyframe
    ], 
    optionsSubmarineFloatKeyFrames 
);

let submarineGoKeyframes = new KeyframeEffect(
    $buttonExample3,
    [
      { right: '0%' }, // keyframe 
      { right: '-300%' } // keyframe
    ], 
    optionsSubmarineGoKeyFrames
);
// Submarine KeyFrames END

// Submarine__Items KeyFrames START
let submarine__hatchKeyFrames = new KeyframeEffect(
    $submarine__hatch,
    [
        {transform: 'translateY(0)'},
        {transform: 'translateY(-20%)'}
    ],
    optionsSubmarine__ItemKeyFrames
);

let submarine__periscopeKeyFrames = new KeyframeEffect(
    $submarine__periscope,
    [
        {transform: 'rotate(90deg)'},
        {transform: 'rotate(0deg)'}
    ],
    optionsSubmarine__ItemKeyFrames
);

let submarine__tailKeyframes = new KeyframeEffect(
    $submarine__tail,
    [
        {transform: 'translateX(0%)'},
        {transform: 'translateX(-150%)'}
    ],
    optionsSubmarine__ItemKeyFrames
);

let submarine__windowsKeyFrames = new Array(optionsSubmarine__Windows.length);
for (let i = 0; i < submarine__windowsKeyFrames.length; i++) {
    submarine__windowsKeyFrames[i] = new KeyframeEffect(
        $submarine__windows[i],
        [
            {transform: 'scale(0)'},
            {transform: 'scale(1)'}
        ],
        optionsSubmarine__Windows[i]
    );
}

let submarine__aletaKeyframes = new KeyframeEffect(
    $submarine__aleta,
    [
        {transform: 'rotate(0deg)'},
        {transform: 'rotate(360deg)'},
    ],
    optionsSubmarine__Aleta
);
// Submarine__Items KeyFrames END

// Submarine Animations START
let animationSubmarineDown = new Animation();
animationSubmarineDown.effect = submarineDownKeyframes;
let animationSubmarineFloat = new Animation();
animationSubmarineFloat.effect = submarineFloatKeyframes;
let animationSubmarineGo = new Animation();
animationSubmarineGo.effect = submarineGoKeyframes;
// Submarine Animations END

// Submarine__Items Animations START
let animationSubmarine__hatch = new Animation();
animationSubmarine__hatch.effect = submarine__hatchKeyFrames;
let animationSubmarine__periscope = new Animation();
animationSubmarine__periscope.effect = submarine__periscopeKeyFrames;
let animationSubmarine__tail = new Animation();
animationSubmarine__tail.effect = submarine__tailKeyframes;

let animationSubmarine__windows = new Array(submarine__windowsKeyFrames.length);
for (let i = 0; i < animationSubmarine__windows.length; i++) {
    animationSubmarine__windows[i] = new Animation();
    animationSubmarine__windows[i].effect = submarine__windowsKeyFrames[i];
}

let animationSubmarine__aleta = new Animation();
animationSubmarine__aleta.effect = submarine__aletaKeyframes;
// Submarine__Items Animations END

const buttonInitialValues = {
    right: $buttonExample3.style.right,
    transform: $buttonExample3.style.position
}

animationSubmarineDown.addEventListener('finish', () => {
    $buttonExample3.firstElementChild.classList.add('fadeOut');
    
    
    animationSubmarine__hatch.play();
    animationSubmarine__periscope.play();
    animationSubmarine__tail.play();
    animationSubmarine__windows.forEach(element => element.play());
    animationSubmarineFloat.play();
    animationSubmarine__aleta.play();

    animationSubmarineGo.play();
});

animationSubmarineGo.addEventListener('finish', () => {
    // Let's restore everything
    animationSubmarine__hatch.cancel();
    animationSubmarine__periscope.cancel();
    animationSubmarine__tail.cancel();
    animationSubmarine__windows.forEach(element => element.cancel());
    animationSubmarineFloat.pause();
    animationSubmarineFloat.cancel();
    animationSubmarine__aleta.pause();
    animationSubmarine__aleta.cancel();
    animationSubmarineGo.cancel();
    $buttonExample3.addEventListener('click', playSubmarineAnimation);
    console.log("Animation end");
})

/////////////////////////////////////////////// Events



$buttonExample3.addEventListener('click', playSubmarineAnimation);

function playSubmarineAnimation() {
    $buttonExample3.removeEventListener('click', playSubmarineAnimation);
    animationSubmarineDown.play();
}

