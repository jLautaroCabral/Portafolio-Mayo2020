let $skillsAll = document.querySelectorAll('.skills');
let $buttons = [$frontEndButton, $devButton, $backEndButton,  $othersButton];

for (let index = 0; index < $buttons.length; index++) {
    $buttons[index].addEventListener('mouseenter',() => {
        $skillsAll[index].style.transform = 'translateY(0%)';
    });
    $buttons[index].addEventListener('mouseleave',() => {
        $skillsAll[index].style.transitionDelay = '0s';
        $skillsAll[index].style.transform = 'translateY(100%)';
    });

    $skillsAll[index].addEventListener('transitionend', () => $skillsAll[index].style.transitionDelay = '1s');
}



