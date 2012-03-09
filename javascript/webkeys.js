var smallRow1 = ['q','w','e','r','t','y','u','i','o','p'];
var smallRow2 = ['a','s','d','f','g','h','j','k','l'];
var smallRow3 = ['SHIFT','z','x','c','v','b','n','m', 'SHIFT'];

var smallChars = new Array();
smallChars[0] = smallRow1;
smallChars[1] = smallRow2;
smallChars[2] = smallRow3;

var capRow1 = ['Q','W','E','R','T','Y','U','I','O','P'];
var capRow2 = ['A','S','D','F','G','H','J','K','L'];
var capRow3 = ['Shift','Z','X','C','V','B','N','M','Shift'];

var capChars = new Array();
capChars[0] = capRow1;
capChars[1] = capRow2;
capChars[2] = capRow3;



head.js("https://ajax.googleapis.com/ajax/libs/jquery/1.7.0/jquery.min.js","./javascript/ui.js","./javascript/touch.js", function (){
$('.touchBox').draggable({revert:true});
	$(".dropArea").droppable({
    drop: function( event, ui ) {
        //$(ui.draggable).remove();
        $(this).css({'border':'#777 solid 3px','background':'#eee'});
    },
    over: function(event, ui) {
        $(this).css({'border':'#a33 solid 3px','background':'#faa'});
    },
    out: function (event, ui){
        $(this).css({'border':'#777 solid 3px','background':'#eee'});
    }
	});
});

//Dynamically generate the table to hold the keys
function loadStructure()
{
	var maincontainer = document.getElementById('main_container');
	var dynaTable1 = document.createElement('table');
	var dynaTable2 = document.createElement('table');
	var dynaTable3 = document.createElement('table');
	
	var row1 = document.createElement('tr');
	var row2 = document.createElement('tr');
	var row3 = document.createElement('tr');
	
	$(dynaTable1).attr('id','main_table1');
	$(dynaTable1).attr('align','center');

	$(dynaTable2).attr('id','main_table2');
	$(dynaTable2).attr('align','center');

	$(dynaTable3).attr('id','main_table3');
	$(dynaTable3).attr('align','center');
	
	$(row1).attr('id','main_table1_row1');
	
	$(row2).attr('id','main_table2_row2');
	
	$(row3).attr('id','main_table3_row3');
	
	maincontainer.appendChild(dynaTable1);
	maincontainer.appendChild(dynaTable2);
	maincontainer.appendChild(dynaTable3);

	dynaTable1.appendChild(row1);
	dynaTable2.appendChild(row2);
	dynaTable3.appendChild(row3);
	
	loadKeys();
}

function loadKeys()
{
	var row1 = document.getElementById('main_table1_row1');
	var row2 = document.getElementById('main_table2_row2');
	var row3 = document.getElementById('main_table3_row3');
	
	$(row1).empty();
	$(row2).empty();
	$(row3).empty();
	
	var rows = [row1, row2, row3];
	
	for(var i = 0; i < smallChars.length; i++)
	{
		for(var j = 0; j < smallChars[i].length; j++)
		{
			var cell = document.createElement('td');
			var key = document.createElement('div');
			
			$(key).attr('id', smallChars[i][j]);
			$(key).attr('class', 'touchBox');
			key.innerHTML = smallChars[i][j];
			
			if(smallChars[i][j] == "SHIFT"){
				$(key).attr('onclick', 'loadKeysUpperCase();');
			}
			else
			{
				$(key).attr('onclick', 'writeTHIS(this.id.toString());');
			}
			
			rows[i].appendChild(cell);
			cell.appendChild(key);
		}
	}
	
	head.js("https://ajax.googleapis.com/ajax/libs/jquery/1.7.0/jquery.min.js","./javascript/ui.js","./javascript/touch.js", function (){
	$('.touchBox').draggable({revert:true});
	});
	
}

function loadKeysUpperCase()
{
	
	var row1 = document.getElementById('main_table1_row1');
	var row2 = document.getElementById('main_table2_row2');
	var row3 = document.getElementById('main_table3_row3');

	$(row1).empty();
	$(row2).empty();
	$(row3).empty();
	
	var rows = [row1, row2, row3];
	
	for(var i = 0; i < capChars.length; i++)
	{
		for(var j = 0; j < capChars[i].length; j++)
		{
			var cell = document.createElement('td');
			var key = document.createElement('div');
			
			$(key).attr('id', capChars[i][j]);
			$(key).attr('class', 'touchBox');
			key.innerHTML = capChars[i][j];
			
			if(capChars[i][j] == "Shift"){
				$(key).attr('onclick', 'loadKeys();');
			}
			else
			{
				$(key).attr('onclick', 'writeTHIS(this.id.toString());');
			}
			
			rows[i].appendChild(cell);
			cell.appendChild(key);
		}
	}
	
	head.js("https://ajax.googleapis.com/ajax/libs/jquery/1.7.0/jquery.min.js","./javascript/ui.js","./javascript/touch.js", function (){
	$('.touchBox').draggable({revert:true});
	});
	
}

function writeTHIS(text)
{
	var box = document.getElementById('textfield');
	
	box.innerHTML += text;

}