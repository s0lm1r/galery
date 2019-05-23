'use strict';

const largeImg = document.getElementById('largeImg');
const thumbs = document.getElementById('thumbs');

const showImg = (event) => {
 event.preventDefault();
 	let click = event.target;
 	if (click.tagName !== "IMG")  return;
 		largeImg.src = click.parentNode.href;
  }
thumbs.addEventListener('click', showImg);
thumbs.addEventListener('mouseover', showImg);


 



