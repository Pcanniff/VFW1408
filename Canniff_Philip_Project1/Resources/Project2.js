
/*	Philip A. Canniff
 * 	VF 1408
 *  Chad Gibson
 * 	Project 1 
 */

//Events
nextView.addEventListener("click", function(){
	i = i + 1;
	if(i < stringArray.length){
		contentText.text = stringArray[i];
		contentPhoto.backgroundImage = pictureArray[i];
		 }else{
		 	i = 0;
		 	contentText.text = stringArray[i];
		 	contentPhoto.backgroundImage = pictureArray[i];
		 }
		 
});
previousView.addEventListener("click", function(){
	i = i - 1;
	if(i > 0){
		contentText.text = stringArray[i];
		contentPhoto.backgroundImage = pictureArray[i];
		 }else{
		 	i = stringArray.length - 1;
		 	contentText.text = stringArray[i];
		 	contentPhoto.backgroundImage = pictureArray[i];
		 }
		 
});
