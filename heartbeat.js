// time accumulator in seconds
var timer = 0; 

// reset timer on mouse move
document.addEventListener('mousemove', function(){
	timer = 0;
});

// reset timer on keypress
document.addEventListener('keypress', function(){
	timer = 0;
});

/**
* Run the function every second and compare the idle duration with the time(accumulator)
*/
function heartbeat(idleDuration){
	var interval = setInterval(function(){
		if(timer >= idleDuration){
			alert("Your session expired!");
		  clearInterval(interval);
		}else{
			timer += 1;  
		}
  }, 1000);
}

heartbeat(60);
