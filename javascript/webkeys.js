var smallRow1 = ['q','w','e','r','t','y','u','i','o','p'];
var smallRow2 = ['a','s','d','f','g','h','j','k','l'];
var smallRow3 = ['z','x','c','v','b','n','m'];

var smallChars = new Array();
smallChars[0] = smallRow1;
smallChars[1] = smallRow2;
smallChars[2] = smallRow3;

var capRow1 = ['Q','W','E','R','T','Y','U','I','O','P'];
var capRow2 = ['A','S','D','F','G','H','J','K','L'];
var capRow3 = ['Z','X','C','V','B','N','M'];

var capChars = new Array();
capChars[0] = capRow1;
capChars[1] = capRow2;
capChars[2] = capRow3;



head.js("https://ajax.googleapis.com/ajax/libs/jquery/1.7.0/jquery.min.js","./javascript/ui.js","./javascript/touch.js", function (){
$("#touchme1, #touchme2, #touchme3, #touchme4, #touchme5, #touchme6").draggable({revert:true});
	$("#drop1, #drop2, #drop3, #drop4").droppable({
    drop: function( event, ui ) {
        show(this.id);
        //$(ui.draggable).remove();
        $(this).css({'border':'#777 dashed 3px','background':'#eee'});
    },
    over: function(event, ui) {
        $(this).css({'border':'#a33 dashed 3px','background':'#faa'});
    },
    out: function (event, ui){
        $(this).css({'border':'#777 dashed 3px','background':'#eee'});
    }
	});
});
    
    function show(id)
    {
        var gen_box = document.getElementById(id);
        var gen_box_new = document.createElement('div');
        
        gen_box_new.setAttribute('class', 'droppedBox');
        
        gen_box.appendChild(gen_box_new);
    }
    
    //Dynamically generate all the alphabets
    function dynaAlpha()
    {
    	
    }