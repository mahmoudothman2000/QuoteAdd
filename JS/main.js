let btn = document.getElementById( "btn" );
let container = document.getElementById( "quote" );
let inputName = document.getElementById( "addName" );
let inputQuote = document.getElementById( "addQuote" );
let addBtn = document.getElementById( "addBtn" );
let Show = document.getElementById( "hide" );
let Close = document.getElementById( "hideClose" );
let clearAll = document.getElementById( "clearAll" );
let count;
let repeatNum = [];
let containerQuote = [
  {name: " ― Mahmoud Othman", desc:" “Be yourself; everyone else is already taken.” "},
  {name: " ― Marcus Tullius Cicero ", desc:" “A room without books is like a body without a soul.” "},
  {name: " ― Bernard M. Baruch  ", desc:"  “Be who you are and say what you feel, because those who  matter don't mind.”  "},
  {name: " ― Mae West ", desc:"  “You only live once, but if you do it right, once is enough.”  "},
  {name: " ― Mark Twain  ", desc:"  “If you tell the truth, you don't have to remember anything.”  "},
  {name: " ― Oscar Wilde  ", desc:"  “To live is the rarest thing in the world. Most people exist, that is all.”  "},
  {name: " ― Mahatma Gandhi  ", desc:" “Live as if you were to die tomorrow. Learn as if you were to live forever.”   "},
  {name: " ― Ralph Waldo Emerson  ", desc:" “To be yourself in a world that is constantly trying to else atest accomplishment.”   "},
  {name: " ― Narcotics Anonymous  ", desc:" “Insanity is doing the same thing, over and over again, but expecting different results.”   "},
  {name: " ― Andre Gide, Autumn Leaves  ", desc:" “It is better to be hated for what you are than to be loved for what you are not.”   "}
];



if ( localStorage.getItem( "quotes" )  != null)
{
  containerQuote = JSON.parse( localStorage.getItem( "quotes" ) ) ;
}






btn.onclick = function ()
{

  if (JSON.parse( localStorage.getItem( "count" ) === null))
  {
    count = 10;
  } else
  {
    count = JSON.parse( localStorage.getItem( "count" ) )
  }

  let randomNum = Math.floor( Math.random() * count );
  let userName = containerQuote[ randomNum ].name;
  let quoteUse = containerQuote[ randomNum ].desc;
  let total = `
  <p> ${ quoteUse }</p>
  <p>${ userName }</p>
  `;

  container.innerHTML = total


  //=============

// Not Repeat Function =============>
  
  // if (repeatNum.includes(userName) )
  // {
  //   containerQuote.splice (containerQuote[ randomNum ] , 1 )
  //   console.log("Found");
  // } else
  // {
  //   repeatNum.push( nameUse )
  //   console.log( " Not Found" );
  // }
  // console.log( repeatNum );
  

  //=============

}




addBtn.onclick = function ()
{
  let regex = /^-[A-Z][a-z]{2,} [A-Z][a-z]{2,}-$/;
  if ( regex.test( inputName.value ) )
  {
    let newQuote = {
      name: inputName.value,
      desc : inputQuote.value
    }
    containerQuote.push( newQuote );
    localStorage.setItem( "quotes", JSON.stringify( containerQuote ) )
    count++;
    localStorage.setItem( "count", JSON.stringify( count ) );
    clear()
  }
  else
  {
    alert( `The User Name is Started Capital Character 
    Examp ==>  -Mahmoud Othman-` )
  }
}



function clear ()
{
  inputName.value = "";
  inputQuote.value = "";
}


Show.onclick = function ()
{
  document.getElementById("addText").style.height = "300px"
}


Close.onclick = function ()
{
  document.getElementById("addText").style.height = "0px"
}


clearAll.onclick = function ()
{
  localStorage.clear();
}




