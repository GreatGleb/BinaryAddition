var n1 = '0.010010', n2 = '0.010111',
	n3 = '0.110101', n4 = '1.010110',
	n5 = '1.010010', n6 = '0.010111',
	n7 = '1.110101', n8 = '1.010110',
	n9 = '0.110010', n10 = '0.010111',
	n11 = '1.001111', n12 = '1.001111',
	n13 = '0.110010', n14 = '0.110111',
	n15 = '1.100101', n16 = '1.000110';

var arr3  = [
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  []
];
var arr4  = [
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  []
];

var ost = [];

function AdditionDK (n1, n2) {
	var arr1 = n1.toString().split(''); 
	arr1.splice(1,1);
	var arr2 = n2.toString().split('');
	arr2.splice(1,1);
	var arr3 = [];
	var ost = [];
	var len1 = arr1.length;
	var len2 = arr2.length;
	var str = "<div> ДК<br>"+n1+"<br>"+n2+"<br>";
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
				//console.log("Разряд "+i+" Складываем "+arr1[len1-i]+" и "+arr2[len1-i]+"\nПолучаем: "+ost[len1-i]+arr3[len1-i]+" Перенос: "+ost[len1-i]);
				str = str+"Разряд "+(len1-i)+" Складываем "+arr1[len1-i]+" и "+arr2[len1-i]+"\nПолучаем: "+ost[len1-i]+arr3[len1-i]+" Перенос: "+ost[len1-i]+"<br>";
			} else if (i>(len1-1)) {					
				//console.log("Последний перенос: "+ost[len1-i+1]);
				str = str+"Складываем знаки: "+ost[len1-i+1]+", "+arr1[len1-i]+" и "+arr2[len1-i]+"<br>";
				} else {
				//console.log("Разряд "+i+" Складываем "+ost[len1-i+1]+", "+arr1[len1-i]+" и "+arr2[len1-i]+"\nПолучаем: "+ost[len1-i]+arr3[len1-i]+" Перенос: "+ost[len1-i]);
				str = str+"Разряд "+(len1-i)+" Складываем "+ost[len1-i+1]+", "+arr1[len1-i]+" и "+arr2[len1-i]+"\nПолучаем: "+ost[len1-i]+arr3[len1-i]+" Перенос: "+ost[len1-i]+"<br>";
			}
		}
	
		arr3.splice(1,0,".");
		var result = arr3.join("");
		
		if(ost[0]==ost[1]) {
			//console.log("\nПереполнения не было.");
			str = str+"Переполнения не было."+"<br>";
			str = str+"Результат сложения: "+result+"</div>";
		} else {
			//console.log("\nБыло переполнение.");
			str = str+'<p style="color: red ">Было переполнение.</p>';
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

function AdditionDK2 (n1, n2, i, nom) {

	var arr1 = n1.toString().split(''); 
	arr1.splice(1,1);
	var arr2 = n2.toString().split('');
	arr2.splice(1,1);
	var len1 = arr1.length;
	var len2 = arr2.length;
	if(i==1) {
		var str = "<div>ДК<br>"+n1+"<br>"+n2+"<br>";
	} else {
		var str = "";
	}

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
			if (((ost[len1-i+1]<1)||(ost[len1-i+1]==undefined))&&(i!=len1)) {
				str = str+"Разряд "+(len1-i)+" Складываем "+arr1[len1-i]+" и "+arr2[len1-i]+"<br>Получаем: "+ost[len1-i]+arr3[nom][len1-i]+" Перенос: "+ost[len1-i]+"<br>";
			} else if (i>(len1-1)) {					
				str = str+"Складываем знаки: "+ost[len1-i+1]+", "+arr1[len1-i]+" и "+arr2[len1-i]+"<br>";
				} else {
				str = str+"Разряд "+(len1-i)+" Складываем "+ost[len1-i+1]+", "+arr1[len1-i]+" и "+arr2[len1-i]+"<br>Получаем: "+ost[len1-i]+arr3[nom][len1-i]+" Перенос: "+ost[len1-i]+"<br>";
			}

		if(i==len1) {
			if(ost[0]==ost[1]) {
				str = str+"Переполнения не было."+"<br>";
				arr3[nom].splice(1,0,".");
				var result = arr3[nom].join("");
				str = str+"Результат сложения: "+result+"</div>";
			} else {
				str = str+'<p style="color: red ">Было переполнение.</p>';
			}
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


function AdditionOK (n1, n2) {
	var arr1 = n1.toString().split('');
	if(arr1[1]==".") {
	arr1.splice(1,1); }
	var arr2 = n2.toString().split('');
	if(arr2[1]==".") {
	arr2.splice(1,1); }
	var arr3 = [];
	var ost = [];
	var ost2 = [];
	var arr4 = [];
	var len1 = arr1.length;
	var len2 = arr2.length;
	var str = "<div> ОК<br>"+n1+"<br>"+n2+"<br>";

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
			if (((ost[len1-i+1]<1)||(ost[len1-i+1]==undefined))&&(i!=len1)) {
				str = str+"Разряд "+(len1-i)+" Складываем "+arr1[len1-i]+" и "+arr2[len1-i]+"\nПолучаем: "+ost[len1-i]+arr3[len1-i]+" Перенос: "+ost[len1-i]+"<br>";
			} else if (i>(len1-1)) {					
				str = str+"Складываем знаки: "+ost[len1-i+1]+", "+arr1[len1-i]+" и "+arr2[len1-i]+"<br>";
				} else {
				str = str+"Разряд "+(len1-i)+" Складываем "+ost[len1-i+1]+", "+arr1[len1-i]+" и "+arr2[len1-i]+"\nПолучаем: "+ost[len1-i]+arr3[len1-i]+" Перенос: "+ost[len1-i]+"<br>";
			}
		}

		arr3.splice(1,0,".");
		var result = arr3.join("");
		str = str+"Результат сложения без переноса из знакового разряда: "+result+"</div>";
		arr3.splice(1,1);

		for(var i = 1; i < len1+1; i++) {
			

			if(ost2[len1-i+1]==undefined) {
				var sum = parseInt(arr3[len1-i],10)+parseInt(ost[0],10);
				if(sum > 2.9) {
					arr4[len1-i] = 1;
					ost2[len1-i] = 1;
				}
				else if((sum > 1.1)&&(sum < 2.9)) {
					arr4[len1-i] = 0;
					ost2[len1-i] = 1;
				} else {
					arr4[len1-i] = sum;
					ost2[len1-i] = 0;
				}
			} else if(ost2[len1-i+1]==0) {
				arr4[len1-i] = arr3[len1-i];
					ost2[len1-i] = 0;
				var flag = 9;
			} else {
				var sum = parseInt(arr3[len1-i],10)+ost2[len1-i+1];
				if(sum > 2.9) {
					arr4[len1-i] = 1;
					ost2[len1-i] = 1;
				}
				else if((sum > 1.1)&&(sum < 2.9)) {
					arr4[len1-i] = 0;
					ost2[len1-i] = 1;
				} else {
					arr4[len1-i] = sum;
					ost2[len1-i] = 0;
				}
			}
			if(flag==undefined) {
				if (((ost2[len1-i+1]<1)||(ost2[len1-i+1]==undefined))&&(i!=len1)) {
					str = str+"Прибавляем перенос из знакового разряда:<br>Разряд "+(len1-i)+" Складываем "+arr3[len1-i]+" и "+ost[0]+"\nПолучаем: "+ost2[len1-i]+arr4[len1-i]+" Перенос: "+ost2[len1-i]+"<br>";
				} else if (i>(len1-1)) {					
					str = str+"Складываем знаки: "+ost2[len1-i+1]+", "+arr3[len1-i]+"<br>";
					} else {
					str = str+"Разряд "+(len1-i)+" Складываем "+ost2[len1-i+1]+", "+arr3[len1-i]+"\nПолучаем: "+ost2[len1-i]+arr4[len1-i]+" Перенос: "+ost2[len1-i]+"<br>";
				}
			}
		}

		if(arr1[0]!=arr2[0]||arr1[0]==arr4[0]) {
			//console.log("\nПереполнения не было.");
			str = str+"Переполнения не было."+"<br>";
			arr4.splice(1,0,".");
			var result = arr4.join("");
			str = str+"Результат сложения: "+" "+result+"</p>";
		} else {
			//console.log("\nБыло переполнение.");
			str = str+'<p style="color: red ">Было переполнение.</p>';
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

function IsBigger(n1, n2) {
	var arr1 = n1.toString().split('');
	if(arr1[1]==".") {
	arr1.splice(1,1); }
	var arr2 = n2.toString().split('');
	if(arr2[1]==".") {
	arr2.splice(1,1); }
	
	arr1.splice(0,1);
	arr2.splice(0,1); 
	
	let i = 0;
	while (i < arr1.length) { // выводит 0, затем 1, затем 2
	  if(arr1[i]>arr2[i]) {
		  return 0;
	  } else if (arr1[i]<arr2[i]) {
		  return 1;
	  }
	  i++;
	}
}

function Difference (n1, n2) {
	var arr1 = n1.toString().split('');
	if(arr1[1]==".") {
	arr1.splice(1,1); }
	var arr2 = n2.toString().split('');
	if(arr2[1]==".") {
	arr2.splice(1,1); }	
	arr1.splice(0,1);
	arr2.splice(0,1); 
	let len1 = arr1.length;
	let ost = [];
	let arr3 = [];
	let sum = [];
	
	for(var i = 1; i < len1+1; i++) {
			if(((parseInt(arr1[len1-i],10)==0)&&(parseInt(arr2[len1-i],10)==0))
				||((parseInt(arr1[len1-i],10)==1)&&(parseInt(arr2[len1-i],10)==1))) {
					arr3[len1-i] = 0;
			} else if((parseInt(arr1[len1-i],10)==0)&&(parseInt(arr2[len1-i],10)==1)) {
				arr3[len1-i] = 1;
				arr1[len1-i-1]= parseInt(arr1[len1-i-1],10)-1;
			} else if((parseInt(arr1[len1-i],10)==1)&&(parseInt(arr2[len1-i],10)==0)) {
				arr3[len1-i] = 1;
			} else if((parseInt(arr1[len1-i],10)<0)&&(parseInt(arr2[len1-i],10)==0)) {
				arr3[len1-i] = 0;
				arr1[len1-i-1]= parseInt(arr1[len1-i-1],10)-1;
			} else if((parseInt(arr1[len1-i],10)<0)&&(parseInt(arr2[len1-i],10)==1)) {
				arr3[len1-i] = 0;
				arr1[len1-i-1]= parseInt(arr1[len1-i-1],10)-1;
			}
		}
	return arr3.join('');
}

function AdditionPK (n1, n2) {
	var arr1 = n1.toString().split('');
	if(arr1[1]==".") {
	arr1.splice(1,1); }
	var arr2 = n2.toString().split('');
	if(arr2[1]==".") {
	arr2.splice(1,1); }
	
	var str = "";
	var arr3 = [];
	var ost = [];
	var ost2 = [];
	var arr4 = [];
	
	var len1 = arr1.length;
	var len2 = arr2.length;
			
	var ZnA = arr1[0];
	var ZnB = arr2[0];
	var result;
	
	if(len1 == len2) {
	
		if(arr1[0]==arr2[0]) {
			arr1.splice(0,1);
			arr2.splice(0,1); 
			
			len1 = len1 - 1;
			len2 = len2 - 1;
	
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
			}
		
			arr3.splice(0,0, ZnA);
			arr3.splice(1,0,".");
			result = arr3.join("");
			arr3.splice(1,1);

			if(ost[0]==0) {
				//console.log("\nПереполнения не было.");
				str = str+"Переполнения не было."+"<br>";
				str = str+"Результат сложения: "+result+"</div>"+"</p>";
			} else {
				//console.log("\nБыло переполнение.");
				str = str+'<p style="color: red ">Было переполнение.</p>';
			}
		} else {
			if(IsBigger(n1, n2)==0) {
				var S = Difference(n1, n2).split('');
				S.splice(0,0, ZnA);
				S.splice(1,0,".");
			} else {
				var S = Difference(n2, n1).split('');
				S.splice(0,0, ZnB);
				S.splice(1,0,".");
			}
			result = S.join('');
			str = str+"Переполнения не было."+"<br>";
			str = str+"Результат сложения: "+S.join('')+"</div>"+"</p>";
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

function ProductionOK (n1, n2) {
	console.log("Ehhhuuuuu!"); 

    var arr1 = n1.toString().split('');  
    arr1.splice(1,1); 
    var arr2 = n2.toString().split(''); 

    arr2.splice(1,1); 
    var arr3 = []; 
    var ost = []; 
    var ost2 = []; 
    var arr4 = []; 
    var len1 = arr1.length; 
    var len2 = arr2.length; 

    console.log(arr1); 

    var MN = []; 
    var MT = []; 
    var NulSum = []; 
    var Sum = [];
	var origMN;

    MN[0] = arr1[0]; 

    for(var i = 1; i < (((arr1.length-1)*2)+2); i++) { 
        if(i < (arr1.length+1)) { 
            MN[i] = MN[0]; 
        } else { 
            MN[i] = arr1[i-(arr1.length)];		
        } 
    } 

    for(var i = 0; i < MN.length; i++) { 
        MN[i] = parseInt(MN[i], 10); 
        NulSum[i] = 0; 
    } 
	origMN = MN;
    for(var i = 0; i < arr2.length-1; i++) { 
        MT[i] = parseInt(arr2[i+1], 10); 
    }
	
	arr1.splice(1, 0, '.');
	arr1 = arr1.join('');
	
	NulSum.splice(1, 0, '.');
	NulSum = NulSum.join('');
	
	MN.splice(1, 0, '.');
	MN = MN.join('');
	
	arr2.splice(1, 0, '.');
	arr2 = arr2.join('');
	
	var RESULT = "<br>МН = "+arr1;
	RESULT = RESULT+"<br>МТ = "+arr2;
	RESULT = RESULT+"<br>Sum = "+NulSum;
	RESULT = RESULT+"<br>МН = "+MN;

	arr1 = arr1.split('');
	arr1.splice(1,1);
	
	NulSum = NulSum.split('');
	NulSum.splice(1,1);
	
	MN = MN.split('');
	MN.splice(1,1);
	
	arr2 = arr2.split('');
	arr2.splice(1,1);
	
    for(var i = 1; i < arr1.length; i++) {
        if(i<2) { 
            Sum = NulSum;
			Sum = Sum.join(''); 
			MN = MN.join('');
        }

		if(i < (arr1.length-2)) {	var comment = "&#8721 = &#8721+МН; Мн влево, МТ вправо";	}
		else if (i == (arr1.length-2)) {	var comment = "&#8721 = &#8721+МН.";	}
		else {	var comment = "";	}
		RESULT = RESULT+"<br><br> Шаг  |"+"    &#8721     |"+"      МН       "+" |  МТ  | "+"  Комментарий   |"; 
		RESULT = RESULT+"<br> "+i+" | "+Sum+" | "+MN+" | "+MT.join('')+" | "+comment+" |"; 
		
		if(MT[MT.length-1]>0) {
			Sum = AdditionOK(Sum, MN).addition(); 
			RESULT = RESULT+"<br>  + "+MN;
			Sum = Sum.toString().split('');
			if(Sum[1]==".") {
			Sum.splice(1,1); }
			
			Sum = Sum.join('');
		} else {
			RESULT = RESULT+"<br>  + "+NulSum.join("");	
		}
		RESULT = RESULT+"<br>       _________________<br>     "+Sum;
		
		MN = MN.toString().split('');
		MN.splice(0,1);
		MN.push(arr1[0]);
		MN = MN.join('');
		MT.pop();
	}

	if(arr2[0]>0) {
		MN = [];
		
		RESULT = RESULT+"<br><br>Коррекция<br>&#8721 = "+Sum[0]+"."+Sum.slice(1)+"<br>1)&#8721 = &#8721+(-МН)<br>2)&#8721 = &#8721+МН*2^-6";

		if(arr1[0] == 1) {
			MN[0] = 0;
			MN.push(0);
		} else {
			MN[0] = 1;
			MN.push(1);
		}
		
		var ll = arr1.length;
		ll = ll + 1;
		
		for(var i = 2; i < ll; i++) {
			if(arr1[i-1]=="0") {
				MN[i] = 1;	}
			else {
				MN[i] = 0;
			}
		}
		
		for(var i = 1; i < arr1.length; i++) {
			if(arr1[0] == 1) {
				MN.push(0);
			} else {
				MN.push(1);
			}
		}
		
		MN = MN.join("");
		origMN = origMN.join("");
		
		RESULT = RESULT+"<br>МН = "+arr1[0]+"."+arr1.slice(1).join('');
		RESULT = RESULT+"<br>-МН = "+MN[0]+"."+MN.slice(2, 8);
		RESULT = RESULT+"<br>МН*2^-6 = "+origMN;

		RESULT = RESULT+"<br><br>1)<br>  "+Sum[0]+"."+Sum.slice(1); 
		RESULT = RESULT+"<br>+ "+MN[0]+"."+MN.slice(1);

		Sum = AdditionOK(Sum, MN).addition();

		RESULT = RESULT+"<br>    _________________<br>  "+Sum;
		
		RESULT = RESULT+"<br><br>2)<br>  "+Sum[0]+Sum.slice(1); 
		RESULT = RESULT+"<br>+ "+origMN[0]+origMN.slice(1);

		Sum = AdditionOK(Sum, origMN).addition();
		
		RESULT = RESULT+"<br>       _________________<br> &#8721 "+Sum;

	}
	return RESULT;
}

function OtricPK(n1) {
	let arr = n1.toString().split('');
	
	if (arr[0] == "1") {
		arr[0] = 0;
	} else if (arr[0]=="0") {
		arr[0] = 1;
	}
	
	return arr.join('');
}

function OtricDK(n) {
	let arr = n.toString().split('');
	
	for(let i = 2; i < arr.length; i++) {
		if (arr[i] == "1") {
			arr[i] = 0;
		} else if (arr[i]=="0") {
			arr[i] = 1;
		}
	}
	
	return arr.join('');
}

function Sdvig(n) {
	n = n.split('');
	n.splice(0,2);
	n.push('0');
	n.splice(1,0,".");
	return n.join('');
}

function SdvigPr(n, t) {
	n = n.split('');
	for(let i = 0; i < t; i++) {
		n.splice(2,0,'0');
	}
	return n.join('');
}

function Drob10(n) {
	n = n.split('');
	let zn = n[0];
	let sum = 0;
	for(let i = 2; i < n.length; i++) {
		if(n[i]=='1') {
			i--;
			let b = i*(-1);
			sum = sum + Math.pow(2,b);
			i++;
		}
	}
	if (zn =='1') {
		sum = sum*(-1);
	}
	sum = sum.toString();
	return sum;
}

function DivisionPK (n1, n2) {
	console.log("Ehhhuuuuu!");
	
    var arr1 = n1.toString().split('');
    arr1.splice(1,1);
	
	let dlme;
	var dltl = OtricPK(n2);
	dltl = OtricDK(dltl);
	let dt10 = Drob10(n2);
	let res = [];
	
	if(arr1[0] == "1") {
		dlme = OtricDK(n1);
	} else {
		dlme = n1;
	}
	
	var edin = [];
	for(let i = 0; i < arr1.length; i++) {
		if(i<(arr1.length-1)) {
			edin[i] = 0;
		} else {
			edin[i] = 1;
		}
	}
	edin.splice(1,0,".");
	edin = edin.join("");

	dltl = AdditionDK(dltl, edin).addition();
	
	let hg = AdditionDK(dlme, dltl).addition();
    var str = "<div> Bloouuu.. Ahhh!<br>"+"ДМ = "+Drob10(n1)+" = "+n1+"<sub>2</sub>; ДТ =  "+dt10+" = "+n2+"<sub>2</sub>;<br><br>"+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; "+dlme+" <div class='space'></div>ДМ<sub>дк</sub> <span class='space'></span>делимое<br>&nbsp;&nbsp;&nbsp;&nbsp;+ "+dltl+" <span class='space'></span>+ (-ДТ<sub>дк</sub>) <span class='space_3'></span>пробное вычитание<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+hg; 
	
	console.log("Delimoe  "+dlme);
	console.log("Dltl  "+dltl);
	console.log("DM+DT= "+hg);
	
	if(hg!=undefined) {
		hg.split('');
		if(hg[0]!="1") {
			str = str + "<p style='color: red'>С<sub>0</sub>>0  При пробном вычитании возникло переполнение, деление невозможно!</p>";
		} else {
			str = str + " <span class='space'></span>С<sub>0</sub><0 <span class='space_2'></span>деление возможно";
	
			let hf = AdditionDK(hg, n2).addition();
			str = str + "<br>&nbsp;&nbsp;&nbsp;&nbsp;+ "+n2+" <span class='space'></span>+ ДТ<sub>дк</sub> <span class='space_1'></span>восстановление делимого<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; "+hf+" <span class='space'></span>ДМ<sub>дк</sub> <span class='space'></span>восстановленное делимое"; 
			
			hf = Sdvig(hf);			
			str = str + "<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; "+hf+" <span class='space'></span>2*(ДМ) <span class='space_5'></span>сдвиг влево (удваивание)";
			let hd = AdditionDK(hf, dltl).addition();
			
			str = str + "<br>&nbsp;&nbsp;&nbsp;&nbsp;+ "+dltl+" <span class='space'></span>+ (-ДТ<sub>дк</sub>) <span class='space_3'></span>вычитаем делитель";
			
			hd.split('');
			let step = 6;
			for(let i = 1; i < (step+1); i++) {
				if (hd[0]=="0") {
					res.push('1');
					str = str + "<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; "+hd+" <span class='space'></span>C<sub>"+i+"</sub>&#8805;0 <span class='space_2'></span>"+i+"-й остаток";
					if(i<step) {
						hd = Sdvig(hd);
						str = str + "<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; "+hd+" <span class='space'></span>2*C<sub>"+i+"</sub> <span class='space_2'></span>удваиваем остаток";
						
						hd = AdditionDK(hd, dltl).addition();
					
						str = str + "<br>&nbsp;&nbsp;&nbsp;&nbsp;+ "+dltl+" <span class='space'></span>+ (-ДТ<sub>дк</sub>) <span class='space_3'></span>вычитаем делитель";
					}
				} else {
					res.push('0');
					str = str + "<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; "+hd+" <span class='space'></span>C<sub>"+i+"</sub><0 <span class='space_2'></span>"+i+"-й остаток";
					if(i<step) {
						str = str + "<br>&nbsp;&nbsp;&nbsp;&nbsp;+ "+n2+" <span class='space'></span>+ ДТ<sub>дк</sub> <span class='space_1'></span>восстановление остатка";
					
						hd = AdditionDK(hd, n2).addition();
						str = str + "<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; "+hd+" <span class='space'></span>2C<sub>"+i+"</sub> <span class='space_6'></span>восстановленный остаток";
						hd = Sdvig(hd);
						str = str + "<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; "+hd+" <span class='space'></span>2*(2C<sub>"+i+"</sub>) <span class='space_5'></span>удваиваем остаток";
						str = str + "<br>&nbsp;&nbsp;&nbsp;&nbsp;+ "+dltl+" <span class='space'></span>+ (-ДТ<sub>дк</sub>) <span class='space_3'></span>вычитаем делитель";
						
						hd = AdditionDK(hd, dltl).addition();
					}
				}
			}
			res = res.join('');
			if((n1[0]=="0" && n2[0]=="0")||(n1[0]=="1" && n2[0]=="1")) {
				res = "0."+res;
			} else {
				res = "1."+res; 
			}
			let res10 = Drob10(res);
			hd = SdvigPr(hd, step);
			let hd10 = Drob10(hd);
			dt10 = Number(dt10);
			hd10 = Number(hd10);
			res10 = Number(res10);
			let resultat = dt10*res10+hd10;
			
			str = str + "<p>ЧТ = "+res+"<sub>2</sub> = "+res10+"<sub>10</sub></p>";
			str = str + "C<sub>"+step+"</sub> = "+ hd+" (сдвинутое вправо на "+step+" разрядов)";
			str = str + "<br> C = C<sub><small>"+step+"</small></sub>*2<sup><small>-"+step+"</small></sup> = "+hd+" = "+hd10;
			str = str + "<br> Проверим правильность выполненного деления:";
			
			str = str + "<p> ДТ*ЧТ + С = "+dt10+"*"+res10+" + "+hd10+" = "+resultat+" &#8776; ДМ</p>";
		}
	} else {
		str = str + "<p style='color: red'>Переполнение, деление невозможно!</p>";
	}
	
	return str;
}

var ostO = [];
var ostO2 = [];
var arrO3  = [
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  []
];
var arrO4  = [
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  []
];

function AdditionOK2 (n1, n2, i, nom) {

	var arr1 = n1.toString().split(''); 
	arr1.splice(1,1);
	var arr2 = n2.toString().split('');
	arr2.splice(1,1);
	var len1 = arr1.length;
	var len2 = arr2.length;
	if(i==1) {
		var str = "<div>ОК<br>"+n1+"<br>"+n2+"<br>";
	} else {
		var str = "";
	}

	if(len1 == len2) {
			if((ostO[len1-i+1]==undefined)||(ostO[len1-i+1]==0)) {
				var sum = parseInt(arr1[len1-i],10)+parseInt(arr2[len2-i],10);
				if(sum > 2.9) {
					arrO3[nom][len1-i] = 1;
					ostO[len1-i] = 1;
				}
				else if((sum > 1.1)&&(sum < 2.9)) {
					arrO3[nom][len1-i] = 0;
					ostO[len1-i] = 1;
				} else {
					arrO3[nom][len1-i] = sum;
					ostO[len1-i] = 0;
				}
			} else {
				var sum = parseInt(arr1[len1-i],10)+parseInt(arr2[len2-i],10)+ostO[len1-i+1];
				if(sum > 2.9) {
					arrO3[nom][len1-i] = 1;
					ostO[len1-i] = 1;
				}
				else if((sum > 1.1)&&(sum < 2.9)) {
					arrO3[nom][len1-i] = 0;
					ostO[len1-i] = 1;
				} else {
					arrO3[nom][len1-i] = sum;
					ostO[len1-i] = 0;
				}
			}
			if (((ostO[len1-i+1]<1)||(ostO[len1-i+1]==undefined))&&(i!=len1)) {
				str = str+"Разряд "+(len1-i)+" Складываем "+arr1[len1-i]+" и "+arr2[len1-i]+"<br>Получаем: "+ostO[len1-i]+arrO3[nom][len1-i]+" Перенос: "+ostO[len1-i]+"<br>";
			} else if (i>(len1-1)) {					
				str = str+"Складываем знаки: "+ostO[len1-i+1]+", "+arr1[len1-i]+" и "+arr2[len1-i]+"<br>";
				} else {
				str = str+"Разряд "+(len1-i)+" Складываем "+ostO[len1-i+1]+", "+arr1[len1-i]+" и "+arr2[len1-i]+"<br>Получаем: "+ostO[len1-i]+arrO3[nom][len1-i]+" Перенос: "+ostO[len1-i]+"<br>";
			}

			if(i==len1) {
					arrO3[nom].splice(1,0,".");
					var result = arrO3[nom].join("");
					str = str+"Результат сложения без переноса из знакового разряда: "+result+"</div>";
			}

			if(i>len1-1) {
				i = i - len1;
				for(var n = i; n < len1+1; n++) {
					i = n;
					if(ostO2[len1-i+1]==undefined) {
						var sum = parseInt(arrO3[nom][len1-i],10)+parseInt(ostO[0],10);
						if(sum > 2.9) {
							arrO4[nom][len1-i] = 1;
							ostO2[len1-i] = 1;
						}
						else if((sum > 1.1)&&(sum < 2.9)) {
							arrO4[nom][len1-i] = 0;
							ostO2[len1-i] = 1;
						} else {
							arrO4[nom][len1-i] = sum;
							ostO2[len1-i] = 0;
						}
					} else if(ostO2[len1-i+1]==0) {
						arrO4[nom][len1-i] = arrO3[nom][len1-i];
							ostO2[len1-i] = 0;
						var flag = 9;
					} else {
						var sum = parseInt(arrO3[nom][len1-i],10)+ostO2[len1-i+1];
						if(sum > 2.9) {
							arrO4[nom][len1-i] = 1;
							ostO2[len1-i] = 1;
						}
						else if((sum > 1.1)&&(sum < 2.9)) {
							arrO4[nom][len1-i] = 0;
							ostO2[len1-i] = 1;
						} else {
							arrO4[nom][len1-i] = sum;
							ostO2[len1-i] = 0;
						}
					}
					if(flag==undefined) {
						if (((ostO2[len1-i+1]<1)||(ostO2[len1-i+1]==undefined))&&(i!=len1)) {
							str = str+"<br><br>Прибавляем перенос из знакового разряда:<br>Разряд "+(len1-i-1)+" Складываем "+arrO3[nom][len1-i]+" и "+ostO[0]+"\nПолучаем: "+ostO2[len1-i]+arrO4[nom][len1-i]+" Перенос: "+ostO2[len1-i]+"<br>";
						} else if (i>(len1-1)) {					
							str = str+"Складываем знаки: "+ostO2[len1-i+1]+", "+arrO3[nom][len1-i]+"<br>";
							} else {
							str = str+"Разряд "+(len1-i-1)+" Складываем "+ostO2[len1-i+1]+", "+arrO3[nom][len1-i]+"\nПолучаем: "+ostO2[len1-i]+arrO4[nom][len1-i]+" Перенос: "+ostO2[len1-i]+"<br>";
						}
					}

					if(i == len1) {			
						if(arr1[0]!=arr2[0]||arr1[0]==arrO4[nom][0]) {
							//console.log("\nПереполнения не было.");
							str = str+"Переполнения не было."+"<br>";
							//arrO4[nom].splice(1,0,".");
							var result = arrO4[nom].join("");
							str = str+"Результат сложения: "+" "+result+"</p>";
						} else {
							//console.log("\nБыло переполнение.");
							str = str+'<p style="color: red ">Было переполнение.</p>';
						}
					}
				}
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
//m[1].innerHTML = AdditionDK(n1, n2).result();
m[2].innerHTML = AdditionDK(n3, n4).result();
m[3].innerHTML = AdditionDK(n5, n6).result();
m[4].innerHTML = AdditionDK(n9, n10).result();
m[5].innerHTML = AdditionDK(n11, n12).result();
m[6].innerHTML = AdditionDK(n13, n14).result();
m[7].innerHTML = AdditionDK(n15, n16).result();

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

// m[1].append(div); m[1].append(plit);
// m[1].getElementsByClassName("plit")[0].append(back);
 m[2].append(div2); m[2].append(plit2);
 m[2].getElementsByClassName("plit")[0].append(back2);
 m[3].append(div3); m[3].append(plit3);
 m[3].getElementsByClassName("plit")[0].append(back3);
 m[4].append(div4); m[4].append(plit4);
 m[4].getElementsByClassName("plit")[0].append(back4);
 m[5].append(div5); m[5].append(plit5);
 m[5].getElementsByClassName("plit")[0].append(back5);
 m[6].append(div6); m[6].append(plit6);
 m[6].getElementsByClassName("plit")[0].append(back6);
 m[7].append(div7); m[7].append(plit7);
 m[7].getElementsByClassName("plit")[0].append(back7);
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

function PressDK (event) {
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
	var plit = event.path[0].getElementsByClassName("plit")[0];
	  if(getComputedStyle(plit.getElementsByClassName("back")[0], null).display != 'none') {

		  if (event.keyCode === 13) {	     
			let info = document.createElement('div');
			var len = N1.toString().split('').length; 

			if(last<len) {
				info.innerHTML = AdditionDK2(N1, N2, last, nom).result();
				plit.append(info);
				
			} 
		  }
	  }
	}	

function FocusDK(n1, n2) {
	this.focus();
	this.addEventListener("keypress", PressDK);
}

function PressOK (event) {
	var nom = event.path[0].id;
	nom--;
	var N1, N2;
	N1 = arrN[nom][0];
	N2 = arrN[nom][1];
	console.log(" n1 "+N1)
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
	var plit = event.path[0].getElementsByClassName("plit")[0];
	  if(getComputedStyle(plit.getElementsByClassName("back")[0], null).display != 'none') {

		  if (event.keyCode === 13) {	     
			let info = document.createElement('div');
			var len = N1.toString().split('').length; 

			if(last<len) {
				info.innerHTML = AdditionOK2(N1, N2, last, nom).result();
				plit.append(info);
				
			} 
		  }
	  }
	}	

function FocusOK(n1, n2) {
	this.focus();
	this.addEventListener("keypress", PressOK);
}


function Sobrat(nom, n1, n2, operation) {
	var el = m[nom].getElementsByClassName("butmath")[0];
	el.addEventListener("click", modifyOperation);

	var el2 = m[nom].getElementsByClassName("plit")[0].getElementsByClassName("back")[0];
	el2.addEventListener("click", modifyOperation);

	let info = document.createElement('div');

	if(operation == "DK") {
		info.innerHTML = AdditionDK2(n1, n2, 1, nom).result();
		m[nom].getElementsByClassName("plit")[0].append(info);

		let foc = FocusDK.bind(m[nom], n1, n2);
		m[nom].addEventListener("click", foc);
	} else {		
		info.innerHTML = AdditionOK2(n1, n2, 1, nom).result();
		m[nom].getElementsByClassName("plit")[0].append(info);

		let foc = FocusOK.bind(m[nom], n1, n2);
		m[nom].addEventListener("click", foc);
	}
}

//Sobrat(1, n1, n2, "DK");
Sobrat(2, n3, n4, "DK");
Sobrat(3, n5, n6, "DK");
Sobrat(4, n9, n10, "DK");
Sobrat(5, n11, n12, "DK");
Sobrat(6, n13, n14, "DK");
Sobrat(7, n15, n16, "DK");

function Count() {
	var text = document.getElementsByTagName("input");
	var val1 = text[0].value;
	var val2 = text[1].value;
	arrN[0][0] = val1;
	arrN[0][1] = val2;
	arrN.unshift([" ", " "]);

	if(document.getElementsByClassName("items")[1].getElementsByTagName("div")[0].textContent=="ДК") {
		m[1].innerHTML = AdditionDK(val1, val2).result();

		let div = document.createElement('div');
		  	div.className = "butmath";
		let plit = document.createElement('div');
		  	plit.className = "plit";
		let back = document.createElement('div');
		  	back.className = "back";
		m[1].append(div); m[1].append(plit);
		m[1].getElementsByClassName("plit")[0].append(back);
		It.push();
		arr.push();
		Sobrat(1, val1, val2, "DK");
	} else if(document.getElementsByClassName("items")[1].getElementsByTagName("div")[0].textContent=="ОК") {
		m[1].innerHTML = ProductionOK(val1, val2);

		It.push();
		arr.push();
	} else {
		m[1].innerHTML = DivisionPK(val1, val2);

		It.push();
		arr.push();
	}
}

function operM() {
	var oM = document.getElementsByClassName("operat")[0];
	if(oM.className == "operat") {
		oM.className = oM.className + " openOperat";
		document.getElementsByClassName("items")[1].getElementsByTagName("div")[1].className = "listOperat listShow";
		document.getElementsByClassName("items")[1].getElementsByTagName("div")[2].className = "listOperat listShow listpktop";
		oM.getElementsByTagName("i")[0].className = "up";
		document.getElementsByClassName("items")[1].getElementsByTagName("div")[1].addEventListener('click', operL);
		document.getElementsByClassName("items")[1].getElementsByTagName("div")[2].addEventListener('click', operL);
	} else {
		document.getElementsByClassName("items")[1].getElementsByTagName("div")[1].className = "listOperat";
		document.getElementsByClassName("items")[1].getElementsByTagName("div")[2].className = "listOperat";		
		oM.className = "operat";
		oM.getElementsByTagName("i")[0].className = "down";
	}
}

function operL(event) {
	
	var oM = document.getElementsByClassName("operat")[0];

	if(oM.className == "operat") {
		oM.className = oM.className + " openOperat";
		document.getElementsByClassName("items")[1].getElementsByTagName("div")[1].className = "listOperat listShow";
		document.getElementsByClassName("items")[1].getElementsByTagName("div")[2].className = "listOperat listShow listpktop";
		oM.getElementsByTagName("i")[0].className = " down";
	} else {
		document.getElementsByClassName("items")[1].getElementsByTagName("div")[1].className = "listOperat";
		document.getElementsByClassName("items")[1].getElementsByTagName("div")[2].className = "listOperat";
		oM.className = "operat";
		oM.getElementsByTagName("i")[0].className = " up";
	}
	if(event.path[0].textContent=="ОК") {
		oM.innerHTML = 'ОК<i class="down"></i>';
		document.getElementsByClassName("oper")[0].innerHTML = "ОК";
		document.getElementsByClassName("oper")[1].innerHTML = "ОК";
		document.getElementsByName('FirstNumber')[0].placeholder='Введите число в ОК';
		document.getElementsByName('SecondNumber')[0].placeholder='Введите число в ОК';
		document.getElementsByClassName("items")[1].getElementsByTagName("div")[1].innerHTML = "ДК";
		document.getElementsByClassName("items")[1].getElementsByTagName("div")[2].innerHTML = "ПК";
	} else if(event.path[0].textContent=="ДК") {		
		oM.innerHTML = 'ДК<i class="down"></i>';
		document.getElementsByClassName("oper")[0].innerHTML = "ДК";
		document.getElementsByClassName("oper")[1].innerHTML = "ДК";
		document.getElementsByName('FirstNumber')[0].placeholder='Введите число в ДК';
		document.getElementsByName('SecondNumber')[0].placeholder='Введите число в ДК';
		document.getElementsByClassName("items")[1].getElementsByTagName("div")[1].innerHTML = "ОК";
		document.getElementsByClassName("items")[1].getElementsByTagName("div")[2].innerHTML = "ПК";
	} else {
		oM.innerHTML = 'ПК<i class="down"></i>';
		document.getElementsByClassName("oper")[0].innerHTML = "ПК";
		document.getElementsByClassName("oper")[1].innerHTML = "ПК";
		document.getElementsByName('FirstNumber')[0].placeholder='Введите число в ПК';
		document.getElementsByName('SecondNumber')[0].placeholder='Введите число в ПК';
		document.getElementsByClassName("items")[1].getElementsByTagName("div")[1].innerHTML = "ДК";
		document.getElementsByClassName("items")[1].getElementsByTagName("div")[2].innerHTML = "ОК";
	}
		document.getElementsByClassName("items")[1].getElementsByTagName("div")[1].removeEventListener('click', operL);
		document.getElementsByClassName("items")[1].getElementsByTagName("div")[2].removeEventListener('click', operL);
}

document.body.addEventListener('click',function(e) {
	if(e.path[0].className!="down"&&e.path[0].className!="listOperat"&&e.path[0].className!="operat openOperat"&&e.path[0].className!="operat") {
		var oM = document.getElementsByClassName("operat")[0];
		if(oM!= undefined&&oM.className != "operat") {
			document.getElementsByClassName("items")[1].getElementsByTagName("div")[1].className = "listOperat";
			document.getElementsByClassName("items")[1].getElementsByTagName("div")[2].className = "listOperat";
			oM.className = "operat";
			oM.getElementsByTagName("i")[0].className = "down";
		}
	}	
});
