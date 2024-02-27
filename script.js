let form =document.querySelector('form');
let logbutton = document.getElementById('logbutton');
console.dir(logbutton);
// const butt = document.getElementById('butt');
// console.log(butt);

// lb.addEventListener("click",(e)=>{
//     e.preventDefault()
//     let username
//      = form.uyo.value;

//     if(username === 'admin' && form.password.value === 'pass'){
//         window.location.href = "./index2games.html";
//         console.log(username);

       
//     } else {
//         alert('nope');
        
//     }
      
// })

// Alternatively

// lb.addEventListener('click',login);

// function login(e){
//     e.preventDefault();
//     let username
//     = form.uyo.value;

//     if(username === 'admin' && form.password.value === 'pass'){
//       window.location.href= './index2games.html';
//       console.log(form.password.value)  ;

//     } else {
//       alert('wrong');
//     }
  
//   }


console.log(logbutton)
logbutton.addEventListener('click', isValid);

  function isValid(e) {
    console.log(form.username);
    let user = form.username.value;
    let pass = form.password.value;

    if(user.length > 3 && pass.length > 4){
      window.location.href= './index2games.html';

    } else {
      alert('wrong');
    }

  }




