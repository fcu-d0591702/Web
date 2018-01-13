/* Button A*/	
	window.onload=function(){
		
	/*Button-A_1*/
		var ButtonA02_1 = document.getElementById("Button_A02_1");
		var ButtonA03_1 = document.getElementById("Button_A03_1");
			
		ButtonA03_1.addEventListener("mouseover", function(){
			ButtonA02_1.style.opacity = 1;
			ButtonA02_1.style.backgroundColor = "red";
		});
			
		ButtonA03_1.addEventListener("mouseout", function(){
			ButtonA02_1.style.opacity = 0.1;
		});

	};
