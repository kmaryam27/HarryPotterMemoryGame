
/**************step 1: taking cover Div and image div from HTML */
let imagedDiv = document.querySelectorAll('.container .imageDiv');
let coverDiv = document.querySelectorAll('.container .coverImag');

/**************step 2: making an array with imageDiv.length size for randoming elements of it*/
let divArray= [];
let finalDivArray = [];
for (let i = 0; i < imagedDiv.length; i++) {
    divArray.push(i);
}

/*************step 3: putting cover Dives in a separate array*/
finalCoverDiv =[];
for (let i = 0; i < coverDiv.length; i++) {
    const element = coverDiv[i];
    finalCoverDiv.push(element);
  }

  /************step 4: shuffle function for make random */
function shuffle(divArray) {
    let currentIndex = divArray.length, temporaryValue, randomIndex;//for this example = 16
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = divArray[currentIndex];
      divArray[currentIndex] = divArray[randomIndex];
      divArray[randomIndex] = temporaryValue;
    }
  
    return divArray;
  }
  
  /*************step 5: order to make a random array */
  divArray = shuffle(divArray);

  /*************step 6: arrange image divs array like random selected array */
  for (let i = 0; i < imagedDiv.length; i++) {
      const element = imagedDiv[i];
      finalDivArray.push(element);
  }
  
  /*************step 7: put image pair for random numbers of divs and add class name to cover div to define what image is covered by which div*/
  finalDivArray[divArray[0]].style.backgroundImage = "url('assets/images/broom.png')";
  finalCoverDiv[divArray[0]].classList.add('broom');
  finalDivArray[divArray[1]].style.backgroundImage = "url('assets/images/broom.png')";
  finalCoverDiv[divArray[1]].classList.add("broom");
  finalDivArray[divArray[2]].style.backgroundImage = "url('assets/images/dragon.png')";
  finalCoverDiv[divArray[2]].classList.add("dragon");
  finalDivArray[divArray[3]].style.backgroundImage = "url('assets/images/dragon.png')";
  finalCoverDiv[divArray[3]].classList.add("dragon");
  finalDivArray[divArray[4]].style.backgroundImage = "url('assets/images/lighting.png')";
  finalCoverDiv[divArray[4]].classList.add("lighting");
  finalDivArray[divArray[5]].style.backgroundImage = "url('assets/images/lighting.png')";
  finalCoverDiv[divArray[5]].classList.add("lighting");
  finalDivArray[divArray[6]].style.backgroundImage = "url('assets/images/magic-ball.png')";
  finalCoverDiv[divArray[6]].classList.add("magic-ball");
  finalDivArray[divArray[7]].style.backgroundImage = "url('assets/images/magic-ball.png')";
  finalCoverDiv[divArray[7]].classList.add("magic-ball");
  finalDivArray[divArray[8]].style.backgroundImage = "url('assets/images/owl.png')";
  finalCoverDiv[divArray[8]].classList.add ("owl");
  finalDivArray[divArray[9]].style.backgroundImage = "url('assets/images/owl.png')";
  finalCoverDiv[divArray[9]].classList.add( "owl");
  finalDivArray[divArray[10]].style.backgroundImage = "url('assets/images/magic-wand.png')";
  finalCoverDiv[divArray[10]].classList.add("magic-wand");
  finalDivArray[divArray[11]].style.backgroundImage = "url('assets/images/magic-wand.png')";
  finalCoverDiv[divArray[11]].classList.add("magic-wand");
  finalDivArray[divArray[12]].style.backgroundImage = "url('assets/images/witch.png')";
  finalCoverDiv[divArray[12]].classList.add("witch");
  finalDivArray[divArray[13]].style.backgroundImage = "url('assets/images/witch.png')";
  finalCoverDiv[divArray[13]].classList.add("witch");
  finalDivArray[divArray[14]].style.backgroundImage = "url('assets/images/wizard.png')";
  finalCoverDiv[divArray[14]].classList.add("wizard");
  finalDivArray[divArray[15]].style.backgroundImage = "url('assets/images/wizard.png')";
  finalCoverDiv[divArray[15]].classList.add("wizard");


/***************step 8: dive click order to all cover divs */
let compareURL = [];
let countImg = 0;

finalCoverDiv.forEach(element => {
    element.style.cursor ='pointer';

    
    element.onclick = function(){
        /***********onclick step 1: use array of 2 object for compare 2 images that are visible */
        if(compareURL.length == 0){
            let contentElement ={
                elementName:'', myClassName:''
            }
        element.style.visibility = "hidden";
        contentElement.elementName =element;
        contentElement.myClassName = element.classList.item(1);
        compareURL.push(contentElement);
        }
        /***********onclick step 2: second time click */
        else if(compareURL.length == 1){
            element.style.visibility = "hidden";

            /***********onclick step 3: use timer for show and hide image*/
            setTimeout(function(){

                let contentElement ={
                    elementName:'', myClassName:''
                }
                contentElement.elementName =element;
                contentElement.myClassName = element.classList.item(1);
                compareURL.push(contentElement);

                /***********onclick step 4: check and compare 2 image */
                if(compareURL[0].myClassName === compareURL[1].myClassName){
                    compareURL = [];

                     /***********onclick step 5: check end of game win */
                    let checkAllStatus = true;
                    for (let i = 0; i < finalCoverDiv.length; i++) {
                        const element2 = finalCoverDiv[i];
                        if(element2.style.visibility === "visible"){
                        checkAllStatus = false; 
                        }
                    }                 
                    if (checkAllStatus === true) {
                        
                        // document.getElementById('#gameContent').visibility = "hidden";
                        document.getElementById("winText").style.visibility = "visible";
                    }
                }
                else{
                    
                    compareURL[0].elementName.style.visibility = "visible";
                    compareURL[1].elementName.style.visibility = "visible";
                    compareURL = [];
                   
                }
            }, 500);
            
           
        }

        
    }
});

let restart = function(){
    location.reload();
}


  
  