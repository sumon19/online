
var one="";
var two="";
var three="";
var four="";
var five="";
var six="";
var seven="";
var eight="";
var nine="";
var ten="";


var oneprice=0;
var twoprice=0;
var threeprice=0;
var fourprice=0;
var fiveprice=0;
var sixprice=0;
var sevenprice=0;
var eightprice=0;
var nineprice=0;
var tenprice=0;

var price="";
var temp="";


var i=0;

var print=document.getElementById('print');
document.getElementById('gocart').onclick=checkout;
var modal = document.getElementById('myModal');





var span = document.getElementsByClassName("close")[0];






span.onclick = function() {
    modal.style.display = "none";
}


window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


animation();
 

function cabbage() {

var cab=document.getElementById('item1').value;

if(cab==1)  {
oneprice=15;	
}
if(cab==2)  {
oneprice=30;	
}
if(cab==3)  {
oneprice=45;	
}
if(cab==4)  {
oneprice=60;	
}
if(cab==5)  {
oneprice=75;	
}

if(cab>0) {
one="Cabbage  -  "+cab+"kg"+" /"+oneprice+"&#2352"+"</br>";
 
document.getElementById('item1').value="0";
if(i<10)  {
i++;





 setTimeout(function() {
document.getElementById('imag1').setAttribute("class", "imag1");
}, 500);
setTimeout(function() {
document.getElementById('imag1').setAttribute("class", "go");
}, 3000);
setTimeout(function() {
document.getElementById('cart0').setAttribute("class", "cartt");
 setTimeout(function() {document.getElementById('print').style.visibility = 'hidden';},500 )
}, 1700);


setTimeout(function() {
document.getElementById('cart0').setAttribute("class", "go");
}, 3000);
setTimeout(function() {
document.getElementById('print').style.visibility = 'visible';  
print.innerHTML=i;
}, 2500);
}
else {

alert("Cart is full");	
	
}



	
}
	
}
function redchilly() {
var cab=document.getElementById('item2').value;
if(cab==1)  {
twoprice=15;	
}
if(cab==2)  {
twoprice=30;	
}
if(cab==3)  {
twoprice=45;	
}
if(cab==4)  {
twoprice=60;	
}
if(cab==5)  {
twoprice=75;	
}

 

 
 
if(cab>0) {
	
two="Red chilly  -  "+cab+"kg"+" /"+twoprice+"&#2352"+"</br>";

document.getElementById('item2').value="0";
if(i<10)  {
i++;

setTimeout(function() {
document.getElementById('imag2').setAttribute("class", "imag2");
}, 500);
setTimeout(function() {
document.getElementById('imag2').setAttribute("class", "go");
}, 3000);
setTimeout(function() {
document.getElementById('cart0').setAttribute("class", "cartt");
 setTimeout(function() {document.getElementById('print').style.visibility = 'hidden';},500 )
}, 1700);


setTimeout(function() {
document.getElementById('cart0').setAttribute("class", "go");
}, 3000);
setTimeout(function() {
document.getElementById('print').style.visibility = 'visible';  
print.innerHTML=i;
}, 2500);
}
else {

alert("Cart is full");	
	
}

}
	
}
function capsicum() {
var cab=document.getElementById('item3').value;
if(cab==1)  {
threeprice=15;	
}
if(cab==2)  {
threeprice=30;	
}
if(cab==3)  {
threeprice=45;	
}
if(cab==4)  {
threeprice=60;	
}
if(cab==5)  {
threeprice=75;	
}


if(cab>0) {
	
three="Capsicum  -  "+cab+"kg"+" /"+threeprice+"&#2352"+"</br>";

document.getElementById('item3').value="0";
if(i<10)  {
i++;

setTimeout(function() {
document.getElementById('imag3').setAttribute("class", "imag3");
}, 500);
setTimeout(function() {
document.getElementById('imag3').setAttribute("class", "go");
}, 3000);
setTimeout(function() {
document.getElementById('cart0').setAttribute("class", "cartt");
 setTimeout(function() {document.getElementById('print').style.visibility = 'hidden';},500 )
}, 1700);


setTimeout(function() {
document.getElementById('cart0').setAttribute("class", "go");
}, 3000);
setTimeout(function() {
document.getElementById('print').style.visibility = 'visible';  
print.innerHTML=i;
}, 2500);
}
else {

alert("Cart is full");	
	
}
	
}
	
}
function tomato() {
var cab=document.getElementById('item4').value;
if(cab==1)  {
fourprice=15;	
}
if(cab==2)  {
fourprice=30;	
}
if(cab==3)  {
fourprice=45;	
}
if(cab==4)  {
fourprice=60;	
}
if(cab==5)  {
fourprice=75;	
}


if(cab>0) {
	
four="Tomato    -  "+cab+"kg"+" /"+fourprice+"&#2352"+"</br>";

document.getElementById('item4').value="0";
if(i<10)  {
i++;

setTimeout(function() {
document.getElementById('imag4').setAttribute("class", "imag4");
}, 500);
setTimeout(function() {
document.getElementById('imag4').setAttribute("class", "go");
}, 3000);
setTimeout(function() {
document.getElementById('cart0').setAttribute("class", "cartt");
 setTimeout(function() {document.getElementById('print').style.visibility = 'hidden';},500 )
}, 1300);


setTimeout(function() {
document.getElementById('cart0').setAttribute("class", "go");
}, 3000);
setTimeout(function() {
document.getElementById('print').style.visibility = 'visible';  
print.innerHTML=i;
}, 2500);
}
else {

alert("Cart is full");	
	
}

	
}
	
}
function onion() {
var cab=document.getElementById('item5').value;
if(cab==1)  {
fiveprice=15;	
}
if(cab==2)  {
fiveprice=30;	
}
if(cab==3)  {
fiveprice=45;	
}
if(cab==4)  {
fiveprice=60;	
}
if(cab==5)  {
fiveprice=75;	
}


if(cab>0) {
	
five="Onion      -   "+cab+"kg"+" /"+fiveprice+"&#2352"+"</br>";

document.getElementById('item5').value="0";
if(i<10)  {
i++;

setTimeout(function() {
document.getElementById('imag5').setAttribute("class", "imag5");
}, 500);
setTimeout(function() {
document.getElementById('imag5').setAttribute("class", "go");
}, 3000);
setTimeout(function() {
document.getElementById('cart0').setAttribute("class", "cartt");
 setTimeout(function() {document.getElementById('print').style.visibility = 'hidden';},500 )
}, 1200);


setTimeout(function() {
document.getElementById('cart0').setAttribute("class", "go");
}, 3000);
setTimeout(function() {
document.getElementById('print').style.visibility = 'visible';  
print.innerHTML=i;
}, 2500);
}
else {

alert("Cart is full");	
	
}


	
}
	
}
function dontknow() {
var cab=document.getElementById('item6').value;
if(cab==1)  {
sixprice=15;	
}
if(cab==2)  {
sixprice=30;	
}
if(cab==3)  {
sixprice=45;	
}
if(cab==4)  {
sixprice=60;	
}
if(cab==5)  {
sixprice=75;	
}


if(cab>0) {
	
six="Moosambi  -  "+cab+"kg"+" /"+sixprice+"&#2352"+"</br>";

document.getElementById('item6').value="0";
if(i<10)  {
i++;

setTimeout(function() {
document.getElementById('imag6').setAttribute("class", "imag6");
}, 500);
setTimeout(function() {
document.getElementById('imag6').setAttribute("class", "go");
}, 3000);
setTimeout(function() {
document.getElementById('cart0').setAttribute("class", "cartt");
 setTimeout(function() {document.getElementById('print').style.visibility = 'hidden';},500 )
}, 1500);


setTimeout(function() {
document.getElementById('cart0').setAttribute("class", "go");
}, 3000);
setTimeout(function() {
document.getElementById('print').style.visibility = 'visible';  
print.innerHTML=i;
}, 2500);
}
else {

alert("Cart is full");	
	
}


	
}
	
}
function papaya() {
var cab=document.getElementById('item7').value;
if(cab==1)  {
sevenprice=15;	
}
if(cab==2)  {
sevenprice=30;	
}
if(cab==3)  {
sevenprice=45;	
}
if(cab==4)  {
sevenprice=60;	
}
if(cab==5)  {
sevenprice=75;	
}


if(cab>0) {
	
seven="Papaya      -  "+cab+"kg"+" /"+sevenprice+"&#2352"+"</br>";

document.getElementById('item7').value="0";
if(i<10)  {
i++;

setTimeout(function() {
document.getElementById('imag7').setAttribute("class", "imag7");
}, 500);
setTimeout(function() {
document.getElementById('imag7').setAttribute("class", "go");
}, 3000);
setTimeout(function() {
document.getElementById('cart0').setAttribute("class", "cartt");
 setTimeout(function() {document.getElementById('print').style.visibility = 'hidden';},500 )
}, 1200);


setTimeout(function() {
document.getElementById('cart0').setAttribute("class", "go");
}, 3000);
setTimeout(function() {
document.getElementById('print').style.visibility = 'visible';  
print.innerHTML=i;
}, 2300);
}
else {

alert("Cart is full");	
	
}
	
}
	
}
function strawberry() {
var cab=document.getElementById('item8').value;
if(cab==1)  {
eightprice=15;	
}
if(cab==2)  {
eightprice=30;	
}
if(cab==3)  {
eightprice=45;	
}
if(cab==4)  {
eightprice=60;	
}
if(cab==5)  {
eightprice=75;	
}


if(cab>0) {
	
eight="Strawberry  -  "+cab+"kg"+" /"+eightprice+"&#2352"+"</br>";

document.getElementById('item8').value="0";
if(i<10)  {
i++;

setTimeout(function() {
document.getElementById('imag8').setAttribute("class", "imag8");
}, 500);
setTimeout(function() {
document.getElementById('imag8').setAttribute("class", "go");
}, 3000);
setTimeout(function() {
document.getElementById('cart0').setAttribute("class", "cartt");
 setTimeout(function() {document.getElementById('print').style.visibility = 'hidden';},500 )
}, 1200);


setTimeout(function() {
document.getElementById('cart0').setAttribute("class", "go");
}, 3000);
setTimeout(function() {
document.getElementById('print').style.visibility = 'visible';  
print.innerHTML=i;
}, 2300);
}
else {

alert("Cart is full");	
	
}

	
}
	
}
function ladyfinger() {
var cab=document.getElementById('item9').value;
if(cab==1)  {
nineprice=15;	
}
if(cab==2)  {
nineprice=30;	
}
if(cab==3)  {
nineprice=45;	
}
if(cab==4)  {
nineprice=60;	
}
if(cab==5)  {
nineprice=75;	
}


if(cab>0) {
	
nine="Ladyfinger  -  "+cab+"kg"+" /"+nineprice+"&#2352"+"</br>";

document.getElementById('item9').value="0";
if(i<10)  {
i++;

setTimeout(function() {
document.getElementById('imag9').setAttribute("class", "imag9");
}, 500);
setTimeout(function() {
document.getElementById('imag9').setAttribute("class", "go");
}, 3000);
setTimeout(function() {
document.getElementById('cart0').setAttribute("class", "cartt");
 setTimeout(function() {document.getElementById('print').style.visibility = 'hidden';},500 )
}, 1200);


setTimeout(function() {
document.getElementById('cart0').setAttribute("class", "go");
}, 3000);
setTimeout(function() {
document.getElementById('print').style.visibility = 'visible';  
print.innerHTML=i;
}, 2300);
}
else {

alert("Cart is full");	
	
}
	
}
	
}
function orange() {
var cab=document.getElementById('item10').value;
if(cab==1)  {
tenprice=15;	
}
if(cab==2)  {
tenprice=30;	
}
if(cab==3)  {
tenprice=45;	
}
if(cab==4)  {
tenprice=60;	
}
if(cab==5)  {
tenprice=75;	
}


if(cab>0) {
	
ten="Orange      -  "+cab+"kg"+" /"+tenprice+"&#2352"+"</br>";

document.getElementById('item10').value="0";
if(i<10)  {
i++;

setTimeout(function() {
document.getElementById('imag10').setAttribute("class", "imag10");
}, 500);
setTimeout(function() {
document.getElementById('imag10').setAttribute("class", "go");
}, 3000);
setTimeout(function() {
document.getElementById('cart0').setAttribute("class", "cartt");
 setTimeout(function() {document.getElementById('print').style.visibility = 'hidden';},500 )
}, 1200);


setTimeout(function() {
document.getElementById('cart0').setAttribute("class", "go");
}, 3000);
setTimeout(function() {
document.getElementById('print').style.visibility = 'visible';  
print.innerHTML=i;
}, 2300);
}
else {

alert("Cart is full");	
	
}
	
}
	
}
function animation() {  


	
	document.getElementById('cart').setAttribute("class", "halo");
 

setTimeout(function() {
document.getElementById('cart').setAttribute("class", "bla");
}, 3000);



	
}



function checkout()  {
	
	 document.getElementById('gif').setAttribute("src", "nonempty.jpg");
	 document.getElementById('gif').style.visibility="visible";
	 document.getElementById("text").style.color="white";
	
	
	if(i>0)  {
		  document.getElementById("text").style.fontSize="20px";	 
		  document.getElementById("canbtn").style.visibility="visible";
		  document.getElementById("ordbtn").style.visibility="visible";
		 modal.style.display = "block";
   temp=one+two+three+four+five+six+seven+eight+nine+ten;   
	
	
	
    document.getElementById("text").innerHTML=temp;
		
		
total();	
       
    } 
	
		
    
	
	else {
	 

     document.getElementById("text").style.fontSize="35px";	 
	 modal.style.display = "block";	
	document.getElementById("text").style.color="white";
		 document.getElementById("text").innerHTML="YOUR CART IS EMPTY";
		 
		  document.getElementById("canbtn").style.visibility="hidden";
		   document.getElementById("ordbtn").style.visibility="hidden";
		  // document.getElementById('gif').style.visibility="hidden";
		   
		    document.getElementById('gif').setAttribute("src", "empty.jpg");
			 document.getElementById("total").innerHTML="";
		
		
	}
   
	}

function cancel() {
	
 one="";
		two="";
	    three="";
        four="";
        five="";
        six="";
        seven="";
        eight="";
        nine="";
        ten="";
		i=0;
		print.innerHTML=i;
		 document.getElementById("total").innerHTML="";
		  document.getElementById("text").style.fontSize="35px";	 
		 document.getElementById("text").style.color="white";
		 document.getElementById("text").innerHTML="YOUR CART IS EMPTY";
		  document.getElementById("canbtn").style.visibility="hidden";
		   document.getElementById("ordbtn").style.visibility="hidden";
		  document.getElementById('gif').setAttribute("class", "gif");
		  
		  setTimeout(function() {
              document.getElementById('gif').setAttribute("class", "bla");
			  document.getElementById('gif').style.visibility="hidden";
			   setTimeout(function() {
              document.getElementById('gif').setAttribute("src", "empty.jpg");
			  document.getElementById('gif').style.visibility="visible";
             }, 4);
             }, 1000);

		  
}

function order()  {
	
	
	 document.getElementById("text").innerHTML="PAYMENT GATEWAY IS UNDER MAINTENANCE";
	
}


function shake() {
	
	 document.getElementById('gif').setAttribute("class", "shake");
	 
	 setTimeout(function() {
              document.getElementById('gif').setAttribute("class", "ake");
			 
             }, 600);
	
	
}

function  total()  {
	
	price=oneprice+ +twoprice+ +threeprice+ +fourprice+ +fiveprice+ +sixprice+ +sevenprice+ +eightprice+ +nineprice+ +tenprice;
	
	 document.getElementById("total").innerHTML="Total - " +price+"&#2352";
	
	
	
}













