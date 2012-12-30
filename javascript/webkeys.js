var _leftKeysCaps = [ 'Q','W','E','R','T','A','S','D','F','G','Alt','Z','X','C','V' ],
	_rightKeysCaps = [ 'Y','U','I','O','P','H','J','K','L','Del','B','N','M','$','Enter' ],
	_leftSymbolKeys = [ '#','1','2','3','(','*','4','5','6','/','Alt','7','8','9','?' ],
	_rightSymbolKeys = [ ')','_','-','+','@',':',';','\'','"','Del','!',',','.','$','Enter' ],
	_bottomLeftRow = [ 'Shift','0','Space' ],
	_bottomRightRow = [ 'Space','Sym','Shift' ],

	_capsKeyArray = [ _leftKeysCaps, _rightKeysCaps ],
	_symKeyArray = [ _leftSymbolKeys, _rightSymbolKeys ],

	_tableArray = [ 'LeftKeyTable', 'RightKeyTable' ],

	capsOn = false,
	symbolOn = false;

loadKeys = function( array )
{
	var table,
		counter1,
		counter2;

	for( counter1 = 0; counter1 < array.length; counter1++ )
	{
		table = document.getElementById( _tableArray[ counter1 ] );

		for( counter2 = 0; counter2 < array[ counter1 ].length; counter2++ )
		{
			var tr;

			if( counter2 % 5 === 0 ) {
				var trTmp = document.createElement( 'tr' );
				table.appendChild( trTmp );			
				tr = trTmp;
			}

			var tmpCell = document.createElement( 'td' );
			var key = document.createElement( 'div' );
			key.id = array[ counter1 ][ counter2 ];
			key.innerHTML = array[ counter1 ][ counter2 ];
			key.setAttribute( 'class', 'key' );
			key.setAttribute( 'ontouchend', 'onKeyPress( this )' );
			//key.setAttribute( 'onclick', 'onKeyPress( this )' );

			tmpCell.appendChild( key );
			tr.appendChild( tmpCell );
		}
	}

	loadBottomRowKeys();
}

loadBottomRowKeys  = function()
{
	var bottomTable = document.createElement( 'table' ),
		bottomTableBody = document.createElement( 'tbody' ),
		counter,
		trow = document.createElement( 'tr' );

		for( counter = 0; counter < _bottomLeftRow.length; counter++ )
		{
			var tmpCell = document.createElement( 'td' );

			var key = document.createElement( 'div' );
			key.id = _bottomLeftRow[ counter ];
			key.innerHTML = _bottomLeftRow[ counter ];
			key.setAttribute( 'class', 'key' );
			key.setAttribute( 'ontouchend', 'onKeyPress( this )' );

			if( key.innerHTML === 'Space' ) {
				key.style.width = '160px';
			}

			tmpCell.appendChild( key );
			trow.appendChild( tmpCell );
		}

		bottomTableBody.appendChild( trow );
		bottomTable.appendChild( bottomTableBody );
		document.getElementById( 'main_container' ).children[ 0 ].appendChild( bottomTable );

		bottomTable = document.createElement( 'table' );
		bottomTableBody = document.createElement( 'tbody' );
		trow = document.createElement( 'tr' );
		for( counter = 0; counter < _bottomRightRow.length; counter++ )
		{
			var tmpCell = document.createElement( 'td' );

			var key = document.createElement( 'div' );
			key.id = _bottomRightRow[ counter ];
			key.innerHTML = _bottomRightRow[ counter ];
			key.setAttribute( 'class', 'key' );
			key.setAttribute( 'ontouchend', 'onKeyPress( this )' );
			//key.setAttribute( 'onclick', 'onKeyPress( this )' );

			if( key.innerHTML === 'Space' ) {
				key.style.width = '160px';
			}

			tmpCell.appendChild( key );
			trow.appendChild( tmpCell );
		}

		bottomTableBody.appendChild( trow );
		bottomTable.appendChild( bottomTableBody );
		document.getElementById( 'main_container' ).children[ 1 ].appendChild( bottomTable );
}

onKeyPress = function( key )
{
	var textArea = document.getElementById( 'textArea' );

	if( key.innerHTML === 'Shift' || key.innerHTML === 'Return' || key.innerHTML === 'Space' || key.innerHTML === 'Del' || key.innerHTML === 'Alt' ) {
		
		if( key.innerHTML === 'Shift' ) {
			if( capsOn ) {
				capsOn = false;
				document.getElementById( 'Shift' ).setAttribute( 'class', 'capsOff' );
			} else {
				capsOn = true;
				document.getElementById( 'Shift' ).setAttribute( 'class', 'capsOn' );
			}
		}

		if( key.innerHTML === 'Space' ) {
			textArea.textContent += ' ';
		}

		if( key.innerHTML === 'Del' ) {
			if( textArea.textContent.length >= 0 ) {
				textArea.textContent = textArea.textContent.substring( 0, textArea.textContent.length - 1 );
			}
		}

		if( key.innerHTML === 'Alt' ) {

			var Ltable = document.getElementById( 'LeftKeyTable' ),
				Rtable = document.getElementById( 'RightKeyTable' ),
				tableArray = [ Ltable, Rtable ],
				charCounter,
				tmpTr;

			if( !symbolOn ) {
				symbolOn = true;

				for( var i = 0; i < tableArray.length; i++ )
				{
					charCounter = 0;

					for( var counter = 0; counter < tableArray[ i ].childNodes.length - 1; counter++ )
					{
						tmpTr = tableArray[ i ].childNodes[ counter + 1 ];
						for( var counter2 = 0; counter2 < tmpTr.childNodes.length; counter2++ )
						{
							tmpTr.childNodes[ counter2 ].childNodes[ 0 ].id = _symKeyArray[ i ][ charCounter ];
							tmpTr.childNodes[ counter2 ].childNodes[ 0 ].textContent = _symKeyArray[ i ][ charCounter ];
							tmpTr.childNodes[ counter2 ].childNodes[ 0 ].setAttribute( 'class', 'key' );
							tmpTr.childNodes[ counter2 ].childNodes[ 0 ].setAttribute( 'ontouchend', 'onKeyPress( this )' );
							//tmpTr.childNodes[ counter2 ].childNodes[ 0 ].setAttribute( 'onclick', 'onKeyPress( this )' );
							charCounter++;
						}
					}
				}
			} else {
				symbolOn = false;

				for( var i = 0; i < tableArray.length; i++ )
				{
					charCounter = 0;

					for( var counter = 0; counter < tableArray[ i ].childNodes.length - 1; counter++ )
					{
						tmpTr = tableArray[ i ].childNodes[ counter + 1 ];
						for( var counter2 = 0; counter2 < tmpTr.childNodes.length; counter2++ )
						{
							tmpTr.childNodes[ counter2 ].childNodes[ 0 ].id = _capsKeyArray[ i ][ charCounter ];
							tmpTr.childNodes[ counter2 ].childNodes[ 0 ].textContent = _capsKeyArray[ i ][ charCounter ];
							tmpTr.childNodes[ counter2 ].childNodes[ 0 ].setAttribute( 'class', 'key' );
							tmpTr.childNodes[ counter2 ].childNodes[ 0 ].setAttribute( 'ontouchend', 'onKeyPress( this )' );
							//tmpTr.childNodes[ counter2 ].childNodes[ 0 ].setAttribute( 'onclick', 'onKeyPress( this )' );
							charCounter++;
						}
					}
				}
			}
		}

	} else {
		if( capsOn ) {
			textArea.textContent += key.innerHTML;	
		} else {
			textArea.textContent += key.innerHTML.toLowerCase();
		}
		
	}
}








