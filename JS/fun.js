
//function getrepodata(){
   // var userName = document.getElementById("username").nodeValue;
   // $.ajax({
      //  url:`https://api.github.com/users/${username}/repos`,
      //  success: function (data) {
       //     let result = document.getElementById("repoTable").innerHTML;
       //     data.forEach(function(dataItem) {
       //         result += `<tr><td>${dataItem.Id}</td><td>${dataItem.Name}</td><td>${dataItem.Url}</td></tr> `,
                
       //     });
  // document.getElementById("repoTable").innerHTML=result;
    //    },
     //   error function (e) {
     //       console.log(e);
            
    //    },
            
        
    //});
//}

//Functions
//function add() {
   // return true;
//}
//add();//function call
//function sub(a) {
  //  return a-1;
  //  }//parameterized function
   // sub(6) ; //function call
//const mul = function(){
   // return true;
//}//function as a value example below
//mul();//functioncall
  
//function calc(fn, fn1, fn2) {
  //  fn();
  //  fn1();
  //  fn2();
//}//function has argument / perameter
 
//calc (add,sub,mul);

//const student = {
  //  marks : function(){
  //      return 100;
 //   },
//};//property as function

//student. marks();





                 //july31 
//class Milk {
  //constructor(name) {
   // this.name = name;
  //}
 //vitamin() {
    
   // console.log(`${this.name} is an excellent source of vitamins and minarals!`);
  //}
 // provides() {
    
  //  console.log(`${this.name} provides protein and calcium!`);
 // }
  //health(){
    
   // console.log(`${this.name} is good for bone and muscle health!`);
  //}
//}

//class Yogurt extends Milk{
  //constructor(name) {
  //  super(name);//here super to call its parent’s constructor
  //}
  //made () {
   // console.log(`${this.name}  made by fermenting milk!`);
 
//}
//}
//class Buttermilk extends Milk{
 // constructor(name) {
   // super(name);//here super to call its parent’s constructor
 // }
  //fat () {
   // console.log(`${this.name} lower in fat than regular milk !`);
  //}
//}
//const m = new Milk("milk"); 

//const y = new Yogurt ("plain yogurt");
//const b = new Buttermilk ("Buttermilk");

//b.fat();
//y.made();

//m.vitamin();
//m.provides();
//m.health();

             //august3rd 
             //username submit and seach history

            
             const names = localStorage.getItem("names")
             ? JSON.parse(localStorage.getItem("a"))
             : [];
           
             function getDetails(name) {
                 const userName = name ? name : document.getElementById('userName').value;
                 
                 if (userName !== '') {
                getUserData(userName);
               const res = names.includes(userName);
               if (!res) {
                names.push(userName);
                localStorage.clear();
                localStorage.setItem("names", JSON.stringify(names));
                fillRecentSearch(names);
                     }
                 } else {
                     document.getElementById('location').innerHTML = 'Enter a valid UserName!!!';
                 }
             }
             
            
             function fillRecentSearch(users) {
                let result = ``;
                 users.forEach(function (user) {
                    result += `<li onclick="getDetails('${user}')">${user}</li>`;
                 });
                 document.getElementById("recentSearch").innerHTML = result;
                
             }
             
             
             function getUserData(userName) {
                 $.ajax({
                     url: `http://api.github.com/users/${userName}`,
                     success: function (data) {
                        
                         document.getElementById('nam').innerHTML = data.name;
                         document.getElementById('loc').innerHTML = data.location;
             getRepoData(userName);
                    
                         if (data.location !== null) {
         
                             document.getElementById('location').innerHTML = data.location;
                             getWeatherData(data.location);
                         } else {
                             document.getElementById('location').innerHTML = 'No Location Details Found!';
                         }
             
                     },
                     error: function (error) {
                         console.log(error);
                         return error;
                     }
                 });
             
                }
             function getRepoData(userName) {
                 let result = `<tr>
                 <th>ID</th>
                 <th>Name</th> 
                 <th>Url</th>
                 <th>Email</th>
               </tr>`;
                 document.getElementById('repoData').innerHTML = result;
             
                
                 $.ajax({
                     url: `http://api.github.com/users/${userName}/repos`,
                     success: function (data) {
                         data.forEach(function (repo) {
                             result += `<tr>
                             <td>${repo.id}</td>
                             <td>${repo.name}</td>
                             <td>${repo.url}</td>
                             <td>${repo.email}</td>
                             <tr>`
                         });
                         document.getElementById('repoData').innerHTML = result;
                     },
                     error: function (error) {
                         console.log(error);
                     }
                 });
             
             }
             
             function getWeatherData(location) {
              $.ajax({
                     url: `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=4e8fe55b900263c5f83603ed631e15ad`,
                     success: function (data) {
                         document.getElementById('weatherData').innerHTML = `<tr>
                         <th>Temperature</th>
                         <th>Humidity</th>
                         </tr>
                         <tr>
                         <td>${data.main.temp}</td>
                         <td>${data.main.humidity}</td>
                         </tr>`;
                     },
                     error: function (error) {
                         console.log(error);
                     }
                 });
             }