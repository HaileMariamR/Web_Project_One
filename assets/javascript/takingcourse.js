// const message = document.querySelector('.message');
// window.addEventListener('DOMContentLoaded' , ()=>{
//     message.className = 'btn m-3'
//     let x = document.createElement('button');
//     x.innerHTML= "X";
//     x.addEventListener('click' , ()=>{
//         message.style.display ="none"
    
//     });
//     message.textContent = "You Have enrolled succesfully for Javascript Course";
    
//     message.appendChild(x)


// });

const items = document.querySelector('.items')
const login = document.querySelector('.Login')
const option1 = document.querySelector('.option1');

const content = document.querySelector('.content');
option1.addEventListener('click' , ()=>{

        let divelement = document.querySelector('div');
        let p  = document.createElement('p');
        p.textContent = "Course content" ;
        divelement.appendChild(p);

        items.appendChild(divelement);


});