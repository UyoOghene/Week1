const form =document.querySelector('form');
const lb = document.querySelector('#lb');

console.log(lb);

// lb.addEventListener("click",(e)=>{
//     e.preventDefault()
//     let username
//      = form.uyo.value;

//     if(username === 'admin' && form.password.value === 'pass'){
//         window.location.href = "./index2.html";
//         console.log(username);

       
//     } else {
//         alert('nope');
        
//     }
      
// })

// Alternatively

lb.addEventListener('click',login);

function login(e){
    e.preventDefault();
    let username
    = form.uyo.value;

    if(username === 'admin' && form.password.value === 'pass'){
      window.location.href= './index2games.html';
      console.log(form.password.value)  ;

    } else {
      alert('wrong');
    }
  
  }



  // function isValid(e) {
  //   e.preventDefault();
    
  //   const username = form.username.value;
  //   const password = form.password.value;

  //   if(username.length >3 && password.length>4){
  //     window.location.href= './index2.html';

  //   } else {
  //     alert('wrong');
  //   }

  // }

  // lb.addEventListener('click',isValid)



