let clicked = false; //variable enables doing onclick action once
var tabOfColors = []; //table declaration (place for tiles' colors)
var numbers = []; //empty array
var min, max, n, p;
var activeCards = [];

min=1;
max=24;

//function that randomizes colors and mix it in table above
function matchColor(divId, nr)
{
    if(!clicked) //if enables to doing onclick only once
    {
        clicked = true;
        for(i=0; i<9; i++) //loop that repeats colors randomising
        {
            do {
                n = Math.floor(Math.random()*(max-min+1))+min; //randomising
                p = numbers.includes(n); //checking if number is repeating
                if(!p){
                numbers.push(n);
                }
            }
            while(p);

            var color;

            //assigning numbers for basic colors
            switch(n)
            {
                case 1: color="green"; break;
                case 2: color="red"; break;
                case 3: color="yellow"; break;
                case 4: color="purple"; break;
                case 5: color="teal"; break;
                case 6: color="aquamarine"; break;
                case 7: color="pink"; break;
                case 8: color="maroon"; break;
                case 9: color="navy"; break;
                case 10: color="plum"; break;
                case 11: color="silver"; break;
                case 12: color="tomato"; break;
                case 13: color="black"; break;
                case 14: color="gray"; break;
                case 15: color="white"; break;
                case 16: color="olive"; break;
                case 17: color="#254117"; break;
                case 18: color="blue"; break;
                case 19: color="magenta"; break;
                case 20: color="orange"; break;
                case 21: color="brown"; break;
                case 22: color="lightblue"; break;
                case 23: color="#50C878"; break;
                case 24: color="#C2B280"; break;
            }

            //pushing doubled colors to the table
            tabOfColors.push(color,color);
        }

        //block of code that mixes numbers in the table
        let currentIndex = tabOfColors.length,  randomIndex;
  
        // While there remain elements to shuffle.
        while (currentIndex != 0) 
        {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
        
            [tabOfColors[currentIndex], tabOfColors[randomIndex]] = [
                tabOfColors[randomIndex], tabOfColors[currentIndex]];
        }
    }

    //adding a new background for div depending on tile id
    var tile1 = document.getElementById(divId);
    tile1.style.background="none";
    tile1.style.backgroundColor=tabOfColors[nr];
    
    //not working at the moment
    /*var activeCard = this;

    //checking if tiles' colors are the same
    if(activeCards.length === 0)
    {
        activeCards[0]=activeCard;
        console.log("1");
        return;
    }
    else
    {
        console.log("2");
        activeCards[1]=activeCard;

        if(activeCards[0].className === activeCards[1].className)
        {
            console.log("wygrana");
        }
        else
        {
            console.log("wygrana");
        }
    }*/
    
}

function reload()
{
    location.reload();
}

