var n1 = '0.010010', n2 = '0.010111',
	n3 = '0.110101', n4 = '1.010110',
	n5 = '1.010010', n6 = '0.010111',
	n7 = '1.110101', n8 = '1.010110',
	n9 = '0.110010', n10 = '0.010111',
	n11 = '1.001111', n12 = '1.001111',
	n13 = '0.110010', n14 = '0.110111',
	n15 = '1.100101', n16 = '1.000110';

var arr3  = [
  [7,7,89,9],
  [],
  [],
  [],
  [],
  [],
  [],
  []
];
var ost = [];

function Addition (n1, n2) {
	var arr1 = n1.toString().split(''); 
	arr1.splice(1,1);
	var arr2 = n2.toString().split('');
	arr2.splice(1,1);
	var arr3 = [];
	var ost = [];
	var len1 = arr1.length;
	var len2 = arr2.length;
	var str = "<p>"+n1+"<br>"+n2+"<br>";
	//console.log(n1);
	//console.log(n2);

	if(len1 == len2) {

		for(var i = 1; i < len1+1; i++) {
			if((ost[len1-i+1]==undefined)||(ost[len1-i+1]==0)) {
				var sum = parseInt(arr1[len1-i],10)+parseInt(arr2[len2-i],10);
				if(sum > 2.9) {
					arr3[len1-i] = 1;
					ost[len1-i] = 1;
				}
				else if((sum > 1.1)&&(sum < 2.9)) {
					arr3[len1-i] = 0;
					ost[len1-i] = 1;
				} else {
					arr3[len1-i] = sum;
					ost[len1-i] = 0;
				}
			} else {
				var sum = parseInt(arr1[len1-i],10)+parseInt(arr2[len2-i],10)+ost[len1-i+1];
				if(sum > 2.9) {
					arr3[len1-i] = 1;
					ost[len1-i] = 1;
				}
				else if((sum > 1.1)&&(sum < 2.9)) {
					arr3[len1-i] = 0;
					ost[len1-i] = 1;
				} else {
					arr3[len1-i] = sum;
					ost[len1-i] = 0;
				}
			}
			//console.log("Ostatok "+ost);
			if (((ost[len1-i+1]<1)||(ost[len1-i+1]==undefined))&&(i!=len1)) {
				//console.log("Разряд "+i+" Складываем "+arr1[len1-i]+" и "+arr2[len1-i]+"\nПолучаем: "+ost[len1-i]+arr3[len1-i]+" Остаток: "+ost[len1-i]);
				str = str+"Разряд "+i+" Складываем "+arr1[len1-i]+" и "+arr2[len1-i]+"\nПолучаем: "+ost[len1-i]+arr3[len1-i]+" Остаток: "+ost[len1-i]+"<br>";
			} else if (i>(len1-1)) {					
				//console.log("Последний остаток: "+ost[len1-i+1]);
				str = str+"Последний остаток: "+ost[len1-i+1]+"<br>";
				} else {
				//console.log("Разряд "+i+" Складываем "+ost[len1-i+1]+", "+arr1[len1-i]+" и "+arr2[len1-i]+"\nПолучаем: "+ost[len1-i]+arr3[len1-i]+" Остаток: "+ost[len1-i]);
				str = str+"Разряд "+i+" Складываем "+ost[len1-i+1]+", "+arr1[len1-i]+" и "+arr2[len1-i]+"\nПолучаем: "+ost[len1-i]+arr3[len1-i]+" Остаток: "+ost[len1-i]+"<br>";
			}
		}
		if(ost[0]==ost[1]) {
			//console.log("\nПереполнения не было.");
			str = str+"Переполнения не было."+"<br>";
		} else {
			//console.log("\nБыло переполнение.");
			str = str+'<p style="color: red ">Было переполнение.</p>';
		}
			arr3.splice(1,0,".");
			var result = arr3.join("");
			str = str+"Результат сложения: "+result+"</p>";

		return {
		    addition: function() {
		      return result;
		    },
		    result: function() {
		      return str;
		    }
		  };   

	}
	str = str+'<p style="color: red ">Числа с разным колличеством разрядов!</p>';
	return  {
		    result: function() {
		      return str;
		    }
		  }; 
}

function Addition2 (n1, n2, i, nom) {

	var arr1 = n1.toString().split(''); 
	arr1.splice(1,1);
	var arr2 = n2.toString().split('');
	arr2.splice(1,1);
	var len1 = arr1.length;
	var len2 = arr2.length;
	if(i==1) {
		var str = "<div>"+n1+"<br>"+n2+"<br>";
	} else {
		var str = "";
	}
console.log(nom)
	if(len1 == len2) {
			if((ost[len1-i+1]==undefined)||(ost[len1-i+1]==0)) {
				var sum = parseInt(arr1[len1-i],10)+parseInt(arr2[len2-i],10);
				if(sum > 2.9) {
					arr3[nom][len1-i] = 1;
					ost[len1-i] = 1;
				}
				else if((sum > 1.1)&&(sum < 2.9)) {
					arr3[nom][len1-i] = 0;
					ost[len1-i] = 1;
				} else {
					arr3[nom][len1-i] = sum;
					ost[len1-i] = 0;
				}
			} else {
				var sum = parseInt(arr1[len1-i],10)+parseInt(arr2[len2-i],10)+ost[len1-i+1];
				if(sum > 2.9) {
					arr3[nom][len1-i] = 1;
					ost[len1-i] = 1;
				}
				else if((sum > 1.1)&&(sum < 2.9)) {
					arr3[nom][len1-i] = 0;
					ost[len1-i] = 1;
				} else {
					arr3[nom][len1-i] = sum;
					ost[len1-i] = 0;
				}
			}
			//console.log("Ostatok "+ost);
			if (((ost[len1-i+1]<1)||(ost[len1-i+1]==undefined))&&(i!=len1)) {
				//console.log("Разряд "+i+" Складываем "+arr1[len1-i]+" и "+arr2[len1-i]+"\nПолучаем: "+ost[len1-i]+arr3[nom][len1-i]+" Остаток: "+ost[len1-i]);
				str = str+"Разряд "+i+" Складываем "+arr1[len1-i]+" и "+arr2[len1-i]+"<br>Получаем: "+ost[len1-i]+arr3[nom][len1-i]+" Остаток: "+ost[len1-i]+"<br>";
			} else if (i>(len1-1)) {					
				//console.log("Последний остаток: "+ost[len1-i+1]);
				str = str+"Последний остаток: "+ost[len1-i+1]+"<br>";
				} else {
				//console.log("Разряд "+i+" Складываем "+ost[len1-i+1]+", "+arr1[len1-i]+" и "+arr2[len1-i]+"\nПолучаем: "+ost[len1-i]+arr3[nom][len1-i]+" Остаток: "+ost[len1-i]);
				str = str+"Разряд "+i+" Складываем "+ost[len1-i+1]+", "+arr1[len1-i]+" и "+arr2[len1-i]+"<br>Получаем: "+ost[len1-i]+arr3[nom][len1-i]+" Остаток: "+ost[len1-i]+"<br>";
			}

		if(i==len1) {
			if(ost[0]==ost[1]) {
				//console.log("\nПереполнения не было.");
				str = str+"Переполнения не было."+"<br>";
			} else {
				//console.log("\nБыло переполнение.");
				str = str+'<p style="color: red ">Было переполнение.</p>';
			}
				arr3[nom].splice(1,0,".");
				var result = arr3[nom].join("");
				str = str+"Результат сложения: "+result+"</div>";
		}
		return {
		    addition: function() {
		      return result;
		    },
		    result: function() {
		      return str;
		    }
		  };   
	}
	str = str+'<p style="color: red ">Числа с разным колличеством разрядов!</p>';
	return  {
		    result: function() {
		      return str;
		    }
		  }; 

}

var m = document.getElementsByClassName("items");
m[0].innerHTML = Addition(n1, n2).result();
m[1].innerHTML = Addition(n3, n4).result();
m[2].innerHTML = Addition(n5, n6).result();
m[3].innerHTML = Addition(n7, n8).result();

m[4].innerHTML = Addition(n9, n10).result();
m[5].innerHTML = Addition(n11, n12).result();
m[6].innerHTML = Addition(n13, n14).result();
m[7].innerHTML = Addition(n15, n16).result();

let div = document.createElement('div');
  	div.className = "butmath";
let plit = document.createElement('div');
  	plit.className = "plit";
let back = document.createElement('div');
  	back.className = "back";
let div2 = document.createElement('div');
  	div2.className = "butmath";
let plit2 = document.createElement('div');
  	plit2.className = "plit";
let back2 = document.createElement('div');
  	back2.className = "back";
let div3 = document.createElement('div');
  	div3.className = "butmath";
let plit3 = document.createElement('div');
  	plit3.className = "plit";
let back3 = document.createElement('div');
  	back3.className = "back";
let div4 = document.createElement('div');
  	div4.className = "butmath";
let plit4 = document.createElement('div');
  	plit4.className = "plit";
let back4 = document.createElement('div');
  	back4.className = "back";
let div5 = document.createElement('div');
  	div5.className = "butmath";
let plit5 = document.createElement('div');
  	plit5.className = "plit";
let back5 = document.createElement('div');
  	back5.className = "back";
let div6 = document.createElement('div');
  	div6.className = "butmath";
let plit6 = document.createElement('div');
  	plit6.className = "plit";
let back6 = document.createElement('div');
  	back6.className = "back";
let div7 = document.createElement('div');
  	div7.className = "butmath";
let plit7 = document.createElement('div');
  	plit7.className = "plit";
let back7 = document.createElement('div');
  	back7.className = "back";
let div8 = document.createElement('div');
  	div8.className = "butmath";
let plit8 = document.createElement('div');
  	plit8.className = "plit";
let back8 = document.createElement('div');
  	back8.className = "back";

 m[0].append(div); m[0].append(plit);
 m[0].getElementsByClassName("plit")[0].append(back);
 m[1].append(div2); m[1].append(plit2);
 m[1].getElementsByClassName("plit")[0].append(back2);
 m[2].append(div3); m[2].append(plit3);
 m[2].getElementsByClassName("plit")[0].append(back3);
 m[3].append(div4); m[3].append(plit4);
 m[3].getElementsByClassName("plit")[0].append(back4);
 m[4].append(div5); m[4].append(plit5);
 m[4].getElementsByClassName("plit")[0].append(back5);
 m[5].append(div6); m[5].append(plit6);
 m[5].getElementsByClassName("plit")[0].append(back6);
 m[6].append(div7); m[6].append(plit7);
 m[6].getElementsByClassName("plit")[0].append(back7);
 m[7].append(div8); m[7].append(plit8);
 m[7].getElementsByClassName("plit")[0].append(back8);

var i = 2, It = [
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  []
];
var arr = [
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  []
];
var arrN = [
  [n1, n2],
  [n3, n4],
  [n5, n6],
  [n7, n8],
  [n9, n10],
  [n11, n12],
  [n13, n14],
  [n15, n16]
];

// Функция изменяет содержимое t2
function modifyOperation() {
	if(this.className=="butmath") {
  		var  target = this.parentNode.getElementsByClassName("plit")[0];
  		target.className = target.className+" plit_act";
		target.style.opacity = "1";
		target.getElementsByClassName("back")[0].style.display = "block";
  		//console.log(target);
	} else {
  		var  target = this.parentNode;
  		target.className = "plit";

		target.style.opacity = "1";
		this.style.display = "none";

  		function opacity() {
		  target.style.opacity = "0";
		}

		setTimeout(opacity, 300);
	}
}

function Press (event) {
	var nom = event.path[0].id;
	nom--;
	var N1, N2;
	N1 = arrN[nom][0];
	N2 = arrN[nom][1];
	if(It[nom].length==0) {
		It[nom].push(i);
	} else {
		var el = It[nom][It[nom].length - 1];
		el++;
		It[nom].push(el);
	}
	el = It[nom][It[nom].length - 1];
	arr[nom].push(el);
	var last = arr[nom][arr[nom].length-1];
	console.log(last)
	var plit = event.path[0].getElementsByClassName("plit")[0];
	  if(getComputedStyle(plit.getElementsByClassName("back")[0], null).display != 'none') {

		  if (event.keyCode === 13) {	     
			let info = document.createElement('div');
			var len = n1.toString().split('').length; 
			if(last<len) {
				info.innerHTML = Addition2(N1, N2, last, nom).result();
				plit.append(info);
				
			} 
		  }
	  }
	}	

function Focus(n1, n2) {
	this.focus();
	this.addEventListener("keypress", Press);
}

function Sobrat(nom, n1, n2) {
	var el = m[nom].getElementsByClassName("butmath")[0];
	el.addEventListener("click", modifyOperation);

	var el2 = m[nom].getElementsByClassName("plit")[0].getElementsByClassName("back")[0];
	el2.addEventListener("click", modifyOperation);

	let info = document.createElement('div');
	info.innerHTML = Addition2(n1, n2, 1, nom).result();
	m[nom].getElementsByClassName("plit")[0].append(info);

	let foc = Focus.bind(m[nom], n1, n2);
	m[nom].addEventListener("click", foc);
}

Sobrat(0, n1, n2);
Sobrat(1, n3, n4);
Sobrat(2, n5, n6);
Sobrat(3, n7, n8);
Sobrat(4, n9, n10);
Sobrat(5, n11, n12);
Sobrat(6, n13, n14);
Sobrat(7, n15, n16);

