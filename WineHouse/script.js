let counter=0;

window.addEventListener('wheel', (e)=>{
	if(e.deltaY>0){


console.log('s')
counter++;
if(counter>=5){
	counter=4;
}


document.querySelector(`.section-${counter}`).style.left='-110vw';

	}
	else{
		document.querySelector(`.section-${counter+1}`).style.left='0vw';

		counter--;
	if(counter<=0){
		counter=0;


	}
}
	


	


})