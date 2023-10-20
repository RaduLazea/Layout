let $menuTriggerButton = document.getElementById('menuTrigger');
let $mainMenuNav = document.getElementById('mainMenu');
let $sliderPickerText = document.getElementById('sliderPickerText');

$menuTriggerButton.addEventListener('click', () => {
    $mainMenuNav.classList.toggle('Active');
    $menuTriggerButton.classList.toggle('Active');
    $sliderPickerText.classList.toggle('Active');
}, true);