function hide(x,y)
{
    console.log('hi');
var hider=document.querySelector(x)



hider.style.display="none";

var shower=document.querySelector(y)

shower.style.display="flex"


}


var Text2=document.querySelector('.calculator .screen h1');
var Text1=document.querySelector('.calculator .screen h5');
var number=document.querySelectorAll(".calculator  div .btn-num");
var operator=document.querySelectorAll(".calculator  div .btn-op");
var sum=document.querySelector(".calculator  div .sum");
var clear=document.querySelector(".c");
var boolSum="false";
var keyFreezer="false";
var opFreezer="true";
var del=document.querySelector(".btn-del");
var btnSymbol=document.querySelector(".btn-symbol");


btnSymbol.addEventListener('click',function(e)






{


    
   
    if(Text2.textContent.charAt(0)== "-" )
{     
    Text2.textContent=Text2.textContent.replace('-','');
   


}
    else{

        Text2.prepend("-");


    }




});



del.addEventListener('click',function(e)


{   
    // var lastEL=Text2[Text2.length-1];

    


    
    Text2.textContent=Text2.textContent.slice(0,-1);
    



}



)




// percentage.addEventListener('click',function(e) {
//     var value=e.target.textContent;

    

   
    
//  if( Text2.textContent == "" )
// {

// }
// else{

//     if(opFreezer=="false")
//     {
        

        

//     }
//     else{

//         if(Text2.textContent.charAt(Text2.textContent.length - 1) == value ){

//             // window.alert("press a number or equals");

//         }

//        else{ 

//         Text2.append(value);
//         var opFreezer="true";
//     }

//     }




// }








// }  )



if (Text2.textContent=="")
{

boolSum="false";
var opFreezer="true";
var keyFreezer="false";

}


clear.addEventListener('click', function()

{

    Text2.textContent="";
    Text1.textContent="";



})

operator.forEach(function(operator)
{



    operator.addEventListener('click',
    
        
    function(e)
    
    
    
    
    {
        var value=e.target.textContent;
    
        if(Text2.textContent=="")
        {
            

        }
        else{

            if(opFreezer=="false"){


            // var sample=Text2.textContent.charAt(Text2.textContent.length - 1);
            // console.log(sample);

            if(Text2.textContent.charAt(Text2.textContent.length - 1) == value )
            {




            }
            else{

                Text2.append(value);
                opFreezer="true";
                boolSum="false";
                keyFreezer="true";

            }


        }


        }






    })


}





)





sum.addEventListener('click',function()




{

    var sum=Text2.textContent;

 
    var op= eval(sum);
  

     Text2.textContent=op;
     Text1.textContent=sum;
     boolSum="true";
     keyFreezer="false";
     opFreezer="false";

     






})







number.forEach(function(number) {
    

    


    number.addEventListener('click',function(e)
    {
        
var value=e.target.textContent;
    
// Text2.textContent=value
        if(Text2.textContent=="")
        {
            Text2.textContent=value;
           
     opFreezer="false";
            
        }
        else if(Text2.textContent!=="")
        {

            opFreezer="false";

            if(boolSum=="true")
            {
                Text2.textContent=value;
                boolSum="false";
                

            }
            else{
            console.log();
            if(Text2.textContent.length<8){

                
            Text2.append(value);
            
            
                    


                
            }
        }
        }
        

    
        // console.log(e.target.textContent);
    
    
    
    })
    



});


// counter




var Add= document.querySelector(".btn-add");
var Reset= document.querySelector(".btn-reset");
var del=document.querySelector(".btn-delete");
var counterText=document.querySelector (".counter-text");

Add.addEventListener('click',function(e)



{

    var sum=counterText.textContent + "+" + 1;
var summer=eval(sum);

counterText.textContent=summer;
// console.log(summer);




})

del.addEventListener('click',function(e)



{

    var sum=counterText.textContent + "-" + 1;
var summer=eval(sum);

counterText.textContent=summer;
// console.log(summer);




})

Reset.addEventListener('click',function(e)



{

   

counterText.textContent="0";
// console.log(summer);




})

// To do


var AddTask=document.querySelector(".add-task");

var addBtn=document.querySelector(".add-task-btn");
var Tasks=document.querySelector(".all-tasks");

AddTask.addEventListener('click',function(e)
{

    console.log("i dey task");
})

addBtn.addEventListener
('click',function(e)
{
// val=e.target.value;
var exist="false";
var val=AddTask.value;

if(val==""){
    console.log("i am empty");
}
else{
// create elements
console.log("i am not empty");

var taskChecker=document.querySelectorAll(".task label");


taskChecker.forEach(function(taskChecker)
{
    console.log("i am for each");

if(taskChecker.textContent==val)
{
    
    window.alert("to do already exists");
    exist="True";
   
}
else{
    

}




}






)
if(exist=="false"){
    

    var div=document.createElement("div");
    var input= document.createElement("input");
    var label= document.createElement("label");
    var input= document.createElement("input");
    var span= document.createElement("span");
    var i= document.createElement("i");
    var divTask=Tasks.appendChild(div);
    divTask.className="task";
    
    var todoChecker=divTask.appendChild(input);
    todoChecker.id="task-checker";
    todoChecker.type="checkbox";
    
    var labeller=divTask.appendChild(label);
    labeller.setAttribute("for","task-checker");
    labeller.textContent=val;
    
    var parentSpan=divTask.appendChild(span);
    parentSpan.className="x";
    var icon=parentSpan.appendChild(i);
    icon.classList="fa fa-close";
    
    
    icon.addEventListener('click',function(e)
    
    {

        e.target.parentElement.parentElement.remove();

    }
    
    
    
    
    
    )
}
else{


}








}

}



)
;


var close= document.querySelectorAll(".task span");


// close2.addEventListener('click',function(e)




// {
//     console.log("i am real");

//     // var delElement=close2.parentElement.remove();
   

// })



close.forEach(function(close)



{
   

close.addEventListener('click',function(e)







{

    
    var delElement=close.parentElement.remove();
    
//     console.log(close.parentElement);
// e.target













})





}


)

//  var allTasks=document.querySelector(".all-tasks");
// function saveData()
//  {

//  localStorage.setItem("data",allTasks.innerHTML);

//  }

//  function showData()
//  {

//      allTasks.innerHTML=localStorage.getItem("data");
//  }
//  showData();


var weatherValue= document.querySelector('.search');
var weatherSearch=document.querySelector('.search-circle');

weatherSearch.addEventListener('click',function(e)

{

var apikey="f87ff2d9ccd13d0e0d1757c25c0b0381";
var apiUrl="http://api.openweathermap.org/geo/1.0/direct?q=";
apiUrl+=weatherValue.value;

async function checkWeather(){

 
const response= await fetch(apiUrl + '&appid=' + apikey);
var data1= await response.json();


var lat=data1.lat;
var lon=data1.lon;

var apiUrl2="https://api.openweathermap.org/data/3.0/onecall?lat=";
apiUrl2+=lat ;
apiUrl2+='&lon=';
apiUrl2+=lon;


const response2= await fetch(apiUrl2 + '&appid=' + apikey);
var data2= await response2.json();

console.log(data2);

  
    

       
}

checkWeather();




})





weatherValue.value