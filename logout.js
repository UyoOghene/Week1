const logout = document.querySelector('#logoutb');

console.log(logout);

logout.addEventListener("click", e=> {
    console.log('hi');
    window.location.href = "./index.html";

})
