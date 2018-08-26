

var array = ['picture_1.jpg', 'picture_2.jpg', 'picture_3.jpg', ];

var arrayOfText = ['Синяя орхидея', 'Розовая орхидея', 'Красная роза', ]


var comingImage = document.getElementById('imge');
var comingText = document.getElementById('text');
var innerText = document.getElementById('inner-text');



var elemright = document.querySelector('a.right');
elemright.addEventListener('click', funcRightRow);


var elemleft = document.getElementById('left');
elemleft.addEventListener('click', funcLeftRow);

var elems = document.getElementsByClassName('fa-circle');
	
	for (var i = 0; i < elems.length; i++) {

		elems[i].addEventListener('click', changeDotColor);
		elems[i].addEventListener('click', changeImgThroughDotClick);//0,1,2
			
	}


var imgMove = document.getElementById('img');
imgMove.addEventListener('mouseover', imgMouseMove);
imgMove.addEventListener('mouseout', imgMouseOut);


 function currentImage () {
	var image = document.getElementById('img');
	return image;
}


function ImageSrc () {
	var image = currentImage ();
	var imgSrc = (image.getAttribute('src'));
	return imgSrc;	
}


function setNewImage (newSrc) {
	var image = currentImage ();
	return image.setAttribute('src', newSrc);
}


function setNewComImage (newComingImageSrc) {
	return comingImage.setAttribute('src', newComingImageSrc);
}

function funcChangeComingImg() {
	var imageSrc = ImageSrc ();
	var newComImageSrc = (imageSrc.split('_'))[1];
	var newComingImageSrc = "images/small-picture_" + newComImageSrc;
	setNewComImage(newComingImageSrc);
}

function funcChangeComingText() {
	var imageSrc = ImageSrc ();
	var newComTextSrc = (imageSrc.split('_')[1]).split('.')[0] -1;
	
	innerText.innerHTML = arrayOfText[newComTextSrc];
}


function funcRightRow() {

	var imgSrc = ImageSrc ();
	

	for (var i = 0; i < array.length; i++) {

		if ((("images/" + array[i]) == imgSrc) && (imgSrc !== ("images/" + array[array.length-1]))) {

			var newSrc = "images/" + array[i+1];
		}

		else if ((("images/" + array[i]) == imgSrc) && (imgSrc == ("images/" + array[array.length-1]))) {

			var newSrc = "images/" + array[0];
		}

	setNewImage (newSrc);
		
	}

}

function funcLeftRow() {

	var imgSrc = ImageSrc ();
	

	for (var i = 0; i < array.length; i++) {

		if ((imgSrc == ("images/" + array[i])) && (imgSrc !== ("images/" + array[0])))	{
			var newSrc = "images/" + array[i-1];
		} else if 

		((("images/" + array[i]) == imgSrc) && (imgSrc == ("images/" + array[0]))) {
			var newSrc = "images/" + array[array.length-1];
		}
	
	setNewImage (newSrc);

	}
	
}

	function changeDotColor() {


		for (var i = 0; i < elems.length; i++) {
			if (elems[i].style.color === 'green'){
				elems[i].style.color = 'red';
			}
		}

		event.target.style.color = 'green';
	}

	function changeImgThroughDotClick() {

		var clickref = this;

		for (var i = 0; i < elems.length; i++) {
			if (elems[i] == clickref){
				var index = i;
				break;
			}
		}

			var newSrcOne = "images/" + array[index];
			setNewImage (newSrcOne);
	}


var smallImgId = document.getElementById('com-img');
var smallTextId = document.getElementById('com-text');

function imgMouseMove() {
	var changeComingImg = funcChangeComingImg();
	var changeComingText = funcChangeComingText();
	smallImgId.style.display='inline';
	smallTextId.style.display='inline';
}
	
function imgMouseOut() {
	smallImgId.style.display='none';
	smallTextId.style.display='none';
}

	





