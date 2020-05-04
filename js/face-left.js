// Animacion Boton 1
let $buttonExample1 = document.getElementById('buttonExample1');

$buttonExample1.addEventListener('click', () => {
    $buttonExample1.style.animationPlayState = 'running';
});
$buttonExample1.addEventListener('animationiteration', () => {
    $buttonExample1.style.animationPlayState = 'paused';
});

// Animacion Boton 2
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


// Animacion Boton 3

let $buttonExample3 = document.getElementById('buttonExample3');

let optionsSubmarineDownKeyFrames = {
    easing: /* 'ease-out', */ 'cubic-bezier(0,.01,0,.98)',
    fill: 'forwards',
    duration: 1000
};
let optionsSubmarineFloatKeyFrames = {
    iterations: Infinity,
    easing: 'ease-in-out',
    direction: 'alternate',
    duration: 2000,
};

let submarineDownKeyframes = new KeyframeEffect( 
    $buttonExample3, // element to animate
    [
      { transform: 'translateY(0%)' }, // keyframe 
      { transform: 'translateY(1200%)' } // keyframe
    ], 
    optionsSubmarineDownKeyFrames // keyframe options
);

let submarineFloatKeyframes = new KeyframeEffect( 
    $buttonExample3, // element to animate
    [
      { transform: 'translateY(1200%)' }, // keyframe 
      { transform: 'translateY(1230%)' } // keyframe
    ], 
    optionsSubmarineFloatKeyFrames // keyframe options
);

let animationSubmarineDown = new Animation();
animationSubmarineDown.effect = submarineDownKeyframes;
let animationSubmarineFloat = new Animation();
animationSubmarineFloat.effect = submarineFloatKeyframes;
/* animationSubmarineFloat.pause();
animationSubmarineDown.pause();
*/

animationSubmarineDown.addEventListener('finish', () => {
    animationSubmarineFloat.play()
    $buttonExample3.firstElementChild.style.opacity = 0;
    console.log($buttonExample3.firstElementChild);
});

$buttonExample3.addEventListener('click', () => {
    animationSubmarineDown.play();
});
