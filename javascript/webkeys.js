var smallRow1 = ['q','w','e','r','t','y','u','i','o','p'];
var smallRow2 = ['a','s','d','f','g','h','j','k','l'];
var smallRow3 = ['Shift','z','x','c','v','b','n','m', 'Shift'];

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

var state;

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
	var dynaTable4 = document.createElement('table');
	
	var row1 = document.createElement('tr');
	var row2 = document.createElement('tr');
	var row3 = document.createElement('tr');
	var row4 = document.createElement('tr');
	
	$(dynaTable1).attr('id','main_table1');
	$(dynaTable1).attr('align','center');

	$(dynaTable2).attr('id','main_table2');
	$(dynaTable2).attr('align','center');

	$(dynaTable3).attr('id','main_table3');
	$(dynaTable3).attr('align','center');
	
	$(dynaTable4).attr('id','main_table4');
	$(dynaTable4).attr('align','center');
	
	$(row1).attr('id','main_table1_row1');
	
	$(row2).attr('id','main_table2_row2');
	
	$(row3).attr('id','main_table3_row3');
	
	$(row4).attr('id','main_table3_row4');
	
	maincontainer.appendChild(dynaTable1);
	maincontainer.appendChild(dynaTable2);
	maincontainer.appendChild(dynaTable3);
	maincontainer.appendChild(dynaTable4);

	dynaTable1.appendChild(row1);
	dynaTable2.appendChild(row2);
	dynaTable3.appendChild(row3);
	dynaTable4.appendChild(row4);
	
	loadKeys();
}

function loadKeys()
{
	state = 'low';

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
			
			var keyName = document.createElement('div');
			
			$(key).attr('id', smallChars[i][j]);
			$(key).attr('class', 'touchBox');
			
			keyName.innerHTML = smallChars[i][j];
			keyName.setAttribute('class', 'keyLabel');
			
			if(state == 'low' && smallChars[i][j] == 'Shift'){
				$(key).attr('ontouchstart', 'loadKeysUpperCase();');
			}
			else
			{
				$(key).attr('ontouchstart', 'writeTHIS(this.id.toString());');
				$(key).attr('ontouchend', '$("#"+this.id.toString()).css("background-color","#999")');
			}
			
			key.appendChild(keyName);
			rows[i].appendChild(cell);
			cell.appendChild(key);
		}
	}
	
	bottomRow();
	
	head.js("https://ajax.googleapis.com/ajax/libs/jquery/1.7.0/jquery.min.js","./javascript/ui.js","./javascript/touch.js", function (){
	$('.touchBox').draggable({revert:true});
	});
	
}

function loadKeysUpperCase()
{
	state = 'up';
	
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
			
			var keyName = document.createElement('div');
			
			$(key).attr('id', capChars[i][j]);
			$(key).attr('class', 'touchBox');
			
			keyName.innerHTML = capChars[i][j];
			keyName.setAttribute('class', 'keyLabel');
			
			if(state == 'up' && capChars[i][j] == 'Shift'){
				$(key).attr('ontouchstart', 'loadKeys();');
			}
			else
			{
				$(key).attr('ontouchstart', 'writeTHIS(this.id.toString());');
				$(key).attr('ontouchend', '$("#"+this.id.toString()).css("background-color","#999")');
			}
			
			key.appendChild(keyName);
			rows[i].appendChild(cell);
			cell.appendChild(key);
		}
	}
	
	bottomRow();
	
	head.js("https://ajax.googleapis.com/ajax/libs/jquery/1.7.0/jquery.min.js","./javascript/ui.js","./javascript/touch.js", function (){
	$('.touchBox').draggable({revert:true});
	});
	
}

function writeTHIS(text)
{
	$("#"+text).css("background-color","#000000");

	var box = document.getElementById('textfield');
	
	if(text == 'spacer')
	{
		box.innerHTML += ' ';
	}
	else if(text == 'return')
	{
		box.innerHTML += '<br />';
	}
	else if(text == 'delete')
	{
		var str = box.innerHTML;
		var newStr = str.substring(0, str.length-1);
		box.innerHTML = '';
		box.innerHTML = newStr;
	}
	else
	{
		box.innerHTML += text;
	}

}

function bottomRow()
{
	var cellSpace = document.createElement('td');
	var cellDelete = document.createElement('td');
	var cellReturn = document.createElement('td');
	var row4 = document.getElementById('main_table3_row4');
	
	$(row4).empty();
	
	var space = document.createElement('div');
	space.setAttribute('class', 'touchBox');
	space.setAttribute('id', 'spacer');
	space.innerHTML = 'Space';
	space.setAttribute('ontouchstart', 'writeTHIS(this.id.toString());');
	
	space.setAttribute('ontouchend', '$("#"+this.id.toString()).css("background-color","#999")');
	
	var del = document.createElement('div');
	del.setAttribute('class', 'touchBox');
	del.setAttribute('id', 'delete');
	del.innerHTML = 'Delete';
	del.setAttribute('ontouchstart', 'writeTHIS(this.id.toString());');

	del.setAttribute('ontouchend', '$("#"+this.id.toString()).css("background-color","#999")');

	var returnKey = document.createElement('div');
	returnKey.setAttribute('class', 'touchBox');
	returnKey.setAttribute('id', 'return');
	returnKey.innerHTML = 'Return';
	returnKey.setAttribute('ontouchstart', 'writeTHIS(this.id.toString());');
	
	returnKey.setAttribute('ontouchend', '$("#"+this.id.toString()).css("background-color","#999")');
	
	row4.appendChild(cellSpace);
	row4.appendChild(cellReturn);
	row4.appendChild(cellDelete);
	
	cellSpace.appendChild(space);
	
	cellDelete.appendChild(del);
	
	cellReturn.appendChild(returnKey);
}