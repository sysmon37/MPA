

var p1VisitedC = 0;
var p2VisitedC = 0;
var p3VisitedC = 0;
var p4VisitedC = 0;
var p5VisitedC = 0;



function showAnswer (a){
    
    document.getElementById("faqback").setAttribute("onclick","location.reload();")
    document.getElementById("faqlist").style.display = "none";
    document.getElementById(a).style.display = "block";
    
}


function edueduBox2Click() {
    window.location="/index.html";
    sessionStorage.setItem("eduManuVisited",1);
  
    
    
    
}


   

function interactiveImagesp1() {
    
    document.getElementById("p2").style.display = "none";
    document.getElementById("p2a").style.display = "none";
    document.getElementById("p3").style.display = "none";
    document.getElementById("p3a").style.display = "none";
    document.getElementById("p4").style.display = "none";
    document.getElementById("p5").style.display = "none";
    document.getElementById("p1text1").style.display = "block";
    document.getElementById("backI").style.display = "none";
    document.getElementById("backII").style.display = "block";
    p1VisitedC ++;
    
    
    
}

function interactiveImagesp2() {
    
    document.getElementById("p1").style.display = "none";
    document.getElementById("p1a").style.display = "none";
    
    document.getElementById("p3a").style.display = "none";
    document.getElementById("p3").style.display = "none";
    document.getElementById("p4").style.display = "none";
    document.getElementById("p5").style.display = "none";
    document.getElementById("p2text1").style.display = "block";
    document.getElementById("backI").style.display = "none";
    document.getElementById("backII").style.display = "block";
    p2VisitedC ++;
    
}

function interactiveImagesp3() {
    
    document.getElementById("p2").style.display = "none";
    document.getElementById("p2a").style.display = "none";
    document.getElementById("p1a").style.display = "none";
    document.getElementById("p1").style.display = "none";
    document.getElementById("p4").style.display = "none";
    document.getElementById("p5").style.display = "none";
    document.getElementById("p3text1").style.display = "block";
        document.getElementById("backI").style.display = "none";
    document.getElementById("backII").style.display = "block";
  p3VisitedC ++;
    
}

function interactiveImagesp4() {
    
    document.getElementById("p2").style.display = "none";
    document.getElementById("p3").style.display = "none";
    document.getElementById("p3a").style.display = "none";
    document.getElementById("p1").style.display = "none";
    document.getElementById("p5").style.display = "none";
    document.getElementById("p1a").style.display = "none";
    document.getElementById("p2a").style.display = "none";
    document.getElementById("p3a").style.display = "none";
    document.getElementById("p4text1").style.display = "block";
        document.getElementById("backI").style.display = "none";
    document.getElementById("backII").style.display = "block";
    p4VisitedC ++;
    
}

function interactiveImagesp5() {
    
    document.getElementById("p2").style.display = "none";
    document.getElementById("p3").style.display = "none";
    document.getElementById("p4").style.display = "none";
    document.getElementById("p1").style.display = "none";
    document.getElementById("p1a").style.display = "none";
    document.getElementById("p2a").style.display = "none";
    document.getElementById("p3a").style.display = "none";
    document.getElementById("p5text1").style.display = "block";
        document.getElementById("backI").style.display = "none";
    document.getElementById("backII").style.display = "block";
   p5VisitedC ++;
    
}

function reapear(){
     document.getElementById("p1").style.display = "block";  
    document.getElementById("p2").style.display = "block";
    document.getElementById("p3").style.display = "block";
    document.getElementById("p4").style.display = "block";
    document.getElementById("p5").style.display = "block";
        document.getElementById("backI").style.display = "block";
    document.getElementById("backII").style.display = "none";
    document.getElementById("p1text1").style.display = "none";
    document.getElementById("p2text1").style.display = "none";
    document.getElementById("p3text1").style.display = "none";
    document.getElementById("p4text1").style.display = "none";
    document.getElementById("p5text1").style.display = "none";
    if (p1VisitedC % 2 == 1){
        document.getElementById("p1").style.display = "none";
        document.getElementById("p1a").style.display = "block";
        document.getElementById("p1text1").innerHTML = "You won't have to feel embarressed about being unengaged in your health";  
        
    }else{
        document.getElementById("p1").style.display = "block";
        document.getElementById("p1a").style.display = "none";
        document.getElementById("p1text1").innerHTML = "You will feel more optimistic, have more energy and enjoy more."; 
        
    }
    if (p2VisitedC % 2 == 1){
             document.getElementById("p2").style.display = "none";
        document.getElementById("p2a").style.display = "block";
         document.getElementById("p2text1").innerHTML = "You will set a great example for others.";
        
    }else{
         document.getElementById("p2").style.display = "block";
        document.getElementById("p2a").style.display = "none";
         document.getElementById("p2text1").innerHTML = "You will reduce excuses for not becoming ingaged.";
        
    }
    
    if (p3VisitedC % 2 == 1){
               document.getElementById("p3").style.display = "none";
        document.getElementById("p3a").style.display = "block";
        document.getElementById("p3text1").innerHTML = "Your partner will be relieved beacuase you can likely share a longer and healthier life together.";
    }else{
        
               document.getElementById("p3").style.display = "block";
        document.getElementById("p3a").style.display = "none";
        document.getElementById("p3text1").innerHTML = "You won't get judged by others, you won't have to put up with critical looks from others.";
    }
    
    
  
    
}

function goBack() {
    window.history.back();
}



