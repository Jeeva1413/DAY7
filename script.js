//Solving problems using array functions on rest countries data 

const rest=new XMLHttpRequest();
rest.open("GET","https://restcountries.com/v3.1/all",true);
rest.send();
rest.onload=function(){
    var data =rest.response;
    var result=JSON.parse(data);

//  a) Get all the countries from Asia continent /region using Filter function
let res = result.filter((ele)=>ele.region==="Asia");
let final=res.forEach((ele) =>console.log(ele.name.common));
}
//Get all the countries with a population of less than 2 lakhs using Filter function
const rest1=new XMLHttpRequest();
rest1.open("GET","https://restcountries.com/v3.1/all",true);
rest1.send();
rest1.onload=function(){
    let data =rest1.response;
    let result=JSON.parse(data);
    let res1 =result.filter((ele)=>ele.population<200000);
    let final1=res1.forEach((ele)=>console.log(ele.name.common));
}

//Print the following details name, capital, flag, using forEach function
const rested=new XMLHttpRequest();
rested.open("GET","https://restcountries.com/v3.1/all",true);
rested.send();
rested.onload=function(){
    var data =rested.response;
    var resultes=JSON.parse(data);
  resultes.forEach(element => {
        console.log(element.name)
        console.log(element.capital)
        console.log(element.flag)
        
    });
}
//Print the total population of countries using reduce function

const request=new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all",true);
request.send();
request.onload=function(){
    var data =request.response;
    var resul=JSON.parse(data);
    const total=resul.reduce((acc,curr)=>{
        return acc+curr.population;
    },0);
  console.log(total);
}

//Print the country that uses US dollars as currency.
var requests = new XMLHttpRequest();
 requests.open("GET","https://restcountries.com/v2/all");
 requests.send();
 requests.onload=function(){
     var data = requests.response;
     var results =JSON.parse(data);
     var ress=results.filter((ele)=>{
        for(var key in ele.currencies){
            if(ele.currencies[key].code==="USD"){
                 console.log(ele.name)
             }
         }
     })
 }