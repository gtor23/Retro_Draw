
function makeGrid(){

  for(let i = 0; i<64; i++){
    
    $('.grid').append(
        $('<div class = "cell"></div>')
    )

  } 

}



function makePalette(){


  const PALETTE = [
    'red',
    'blue',
    'orange',
    'yellow',
    'green',
    'purple',
    'pink',
    'white',
    'black',
    'gray'
    // ...
  ];


  
  for (let index = 0; index < PALETTE.length; index = index + 1) {
    // access the color
    const nextColor = PALETTE[index];
    // rest of code below

    const cButton = $('<button>').css('background-color', nextColor)
    

    $('.palette').append(cButton)
        
  }

  $('.palette button').first().addClass('active');

}

function onPaletteClick(){
  $('.palette button').removeClass('active');

  $(this).addClass('active');
}


function onGridClick(){

  const bColor = $('.active').css('background-color')
    
  if ($(this).css('background-color') === bColor){
    $(this).css('background-color', '');
  }else{
    $(this).css('background-color', bColor);
  }

}


function onClearClick(){
  $('.grid').css('background-color','');
  $('.grid .cell').css('background-color', '');
}


function onFillAllClick(){
  
  const bColor = $('.active').css('background-color')

  $('.grid .cell').css('background-color',bColor);


}

function onFillEmptyClick(){


  const elements = $('.cell')
  const bColor = $('.active').css('background-color')

  for (let index = 0; index < elements.length; index = index + 1) {
    let nextElement = $( elements[index] );
 
    // code goes here

    if (nextElement.css('background-color') === 'rgba(0, 0, 0, 0)') {
      // do things here
      nextElement.css('background-color', bColor);

    }
  }

}



makePalette();
makeGrid();

$('.palette button').click(onPaletteClick);
$('.cell').click(onGridClick);
$('.controls .clear').click(onClearClick);
$('.controls .fill-all').click(onFillAllClick);
$('.controls .fill-empty').click(onFillEmptyClick);