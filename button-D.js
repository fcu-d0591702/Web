/* Button D*/	
window.onload=function(){
	
	/*Button-D_1*/
		var ButtonD01_1 = document.getElementById("Button-D01_1");
		var ButtonD02_1 = document.getElementById("Button-D02_1");
		var ButtonD03_1 = document.getElementById("Button-D03_1");
		var ButtonD09_1 = document.getElementById("Button-D09_1");
	
		ButtonD09_1.addEventListener("mouseover", function(){
			ButtonD01_1.style.borderColor = "rgb(111,159,52)";		
			ButtonD02_1.style.WebkitFilter = "brightness(.5)";
			ButtonD03_1.style.opacity = 1;
		});
			
		ButtonD09_1.addEventListener("mouseout", function(){
			ButtonD01_1.style.borderColor = "rgb(236,236,236)";
			ButtonD02_1.style.WebkitFilter = "brightness(1)";
			ButtonD03_1.style.opacity = 0;
		});
		
	/*Button-D_2*/	
		var ButtonD01_2 = document.getElementById("Button-D01_2");
		var ButtonD02_2 = document.getElementById("Button-D02_2");
		var ButtonD03_2 = document.getElementById("Button-D03_2");
		var ButtonD09_2 = document.getElementById("Button-D09_2");
		
		ButtonD09_2.addEventListener("mouseover", function(){
			ButtonD01_2.style.borderColor = "rgb(111,159,52)";		
			ButtonD02_2.style.WebkitFilter = "brightness(.5)";
			ButtonD03_2.style.opacity = 1;
		});
			
		ButtonD09_2.addEventListener("mouseout", function(){
			ButtonD01_2.style.borderColor = "rgb(236,236,236)";
			ButtonD02_2.style.WebkitFilter = "brightness(1)";
			ButtonD03_2.style.opacity = 0;
		});
		
		
};
