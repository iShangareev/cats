
let sels = document.querySelectorAll('.cats__wrapper-item-info');
let wt = document.querySelectorAll('.cats__wrapper-item-weight');
let fuagra = document.getElementById('fuagra');
let fish = document.getElementById('fish');
let chicken = document.getElementById('chicken');
let msg = document.querySelectorAll('.msg__select');
// console.log(msg[0])

sels[0].addEventListener("click", function () {
sels[0].classList.toggle('cats__wrapper-item-info-sel');
wt[0].classList.toggle('cats__wrapper-item-weight-sel');


if 
(fuagra.innerHTML === "Печень утки разварная с артишоками.") 
    {fuagra.innerHTML = "Чего сидишь? Порадуй котэ, ";
    let newSpan = document.createElement('span');
    newSpan.className = "msg__select";
    fuagra.append(newSpan);
    newSpan.innerHTML = "купи.";
}
else 
    {fuagra.innerHTML = "Печень утки разварная с артишоками.";} 
});

msg[0].addEventListener("click", function () {

    sels[0].classList.toggle('cats__wrapper-item-info-sel');
    wt[0].classList.toggle('cats__wrapper-item-weight-sel');
    
    if 
    (fuagra.innerHTML === "Печень утки разварная с артишоками.") 
        {fuagra.innerHTML = "Чего сидишь? Порадуй котэ, <span class='msg__select'>купи.</span>";
        let newSpan = document.createElement('span');
        newSpan.className = "msg__select";
        fuagra.append(newSpan);
        newSpan.innerHTML = "купи.";
    }
    else 
        {fuagra.innerHTML = "Печень утки разварная с артишоками."}
    });
    



















// sels[1].onclick = function () {
    
// sels[1].classList.toggle('cats__wrapper-item-info-sel');
// wt[1].classList.toggle('cats__wrapper-item-weight-sel');

// if (fish.innerHTML === "Головы щучьи с чесноком да свежайшая сёмгушка.") 

// {fish.innerHTML = "Чего сидишь? Порадуй котэ, <span class='.msg__select' >купи.</span>";}

// // else {fish.innerHTML = "Головы щучьи с чесноком да свежайшая сёмгушка."}
// };

// sels[2].onclick = function () {
    
// sels[2].classList.toggle('cats__wrapper-item-info-sel');
// wt[2].classList.toggle('cats__wrapper-item-weight-sel');


// if 
// (chiсken.innerHTML === "Филе из цыплят с трюфелями в бульоне.") 
// {chiсken.innerHTML = "Чего сидишь? Порадуй котэ, <span class='.msg__select' >купи.</span>";}

// // else {chiсken.innerHTML = "Филе из цыплят с трюфелями в бульоне."}
// };


// msg[1].onclick = function () {
        
//     sels[1].classList.toggle('cats__wrapper-item-info-sel');
//     wt[1].classList.toggle('cats__wrapper-item-weight-sel');
    
//     if (fish.innerHTML === "Головы щучьи с чесноком да свежайшая сёмгушка.") 
    
//     {fish.innerHTML = "Чего сидишь? Порадуй котэ, <span>купи.</span>";}
    
//     // else {fish.innerHTML = "Головы щучьи с чесноком да свежайшая сёмгушка."}
//     };
    
// msg[2].onclick = function () {
        
//     sels[2].classList.toggle('cats__wrapper-item-info-sel');
//     wt[2].classList.toggle('cats__wrapper-item-weight-sel');
    
    
//     if 
//     (chiсken.innerHTML === "Филе из цыплят с трюфелями в бульоне.") 
//     {chiсken.innerHTML = "Чего сидишь? Порадуй котэ, <span>купи.</span>";}
    
//     // else {chiсken.innerHTML = "Филе из цыплят с трюфелями в бульоне."}
//     };
    