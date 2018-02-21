// Write your JavaScript here

$('#calculate-change').click(afterClick);


function afterClick(){
	changeCalculator();
 
  };
  
function changeCalculator(){ 
	var amtDue = parseFloat(document.getElementById('amount-due').value);
	var amtGiven = parseFloat(document.getElementById('amount-received').value);

  var temp = parseFloat((amtGiven - amtDue).toFixed(2));       
	var dollars = parseInt(temp);
  $('#dollars').val(dollars);
  
  var decimals = parseFloat((temp - dollars).toFixed(2)); 
 	var quarters = decimals/0.25;
 		 decimals %= 0.25; 
 	 $('#quarters').val(parseInt(quarters));

 	var dimes = parseInt(decimals/0.10);  
 	    decimals %= 0.10;    
 	 $('#dimes').val(parseInt(dimes));     
 	
  var nickels = parseInt(decimals/0.05);
 	    decimals %= 0.05;
 	 $('#nickels').val(parseInt(nickels));    
 	    
  var pennies = Math.round(decimals*100); 
   $('#pennies').val(parseInt(pennies));   
    };
 	       
 	     
 	    