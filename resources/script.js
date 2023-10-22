let $menuTriggerButton = document.getElementById("menuTrigger");
let $mainMenuNav = document.getElementById("mainMenu");
let $sliderPickerText = document.getElementById("sliderPickerText");

$menuTriggerButton.addEventListener(
	"click",
	() => {
		$mainMenuNav.classList.toggle("Active");
		$menuTriggerButton.classList.toggle("Active");
		$sliderPickerText.classList.toggle("Active");
	},
	true
);

let $previousSliderLink = document.getElementById("previousSlide");
let $nextSliderLink = document.getElementById("nextSlide");
let $sliderPickerList = document.getElementById("sliderPicker");

let currentSlide = 1;

let $sliderList = document.getElementById('sliderList');

let allSlides = $sliderList.childElementCount;


function selectSlide(position) {
	$sliderList.children[currentSlide - 1].classList.remove('Active');
	$sliderPickerList.children[currentSlide - 1].classList.remove('Active');
	currentSlide = position;
	$sliderList.children[currentSlide - 1].classList.add('Active');
	$sliderPickerList.children[currentSlide - 1].classList.add('Active');
}


$previousSliderLink.addEventListener(
	"click",
	() => {
		let position = (currentSlide === 1) ? allSlides : (currentSlide - 1);
	    selectSlide(position);
	},
	true
);

$nextSliderLink.addEventListener(
	"click",
	() => {
		let position = (currentSlide === allSlides) ? 1 : (currentSlide + 1);
	    selectSlide(position);
	},
	true
);


$sliderPickerList.querySelectorAll('.SliderPickerLink').forEach((el, index) => {
	el.addEventListener('click', () => {
		let position = index + 1;
		selectSlide(position);
	}, true);
});

/* instanțierea service worker-ului */
if ('serviceWorker' in navigator) {
	navigator.serviceWorker.register('service-worker.js');
}



/* function search_book() {
	let input = document.getElementById("searchInput").value;
	input = input.toLowerCase();
	let x = document.getElementsByClassName("BookTitle");

	for (i = 0; i < x.length; i++) {
		if (!x[i].innerHTML.toLowerCase().includes(input)) {
			x[i].style.display = "none";
		} else {
			x[i].style.display = "list-item";
		}
	}
} */

function search_book1() {
	const searchbox = document.getElementById("searchInput").value
	const storeitems = document.getElementById("bookGrid");

	const product = document.querySelectorAll("BookGridItem");

	const pname = document.getElementsByClassName("BookTitle");

	

	for (i = 0; i < pname.length; i++) {
		let match = product[i].getElementsByClassName('BookTitle')[0];

        if (match){
            let textValue = match.textContent || match.innerHTML

            if(textValue.toUpperCase().indexOf(searchbox)> -1){
                product[i].style.display = "";
            }else{
                product[i].style.display = "none";
            }
        }
	}
}

