const enroll = document.querySelector('.enroll');
const message = document.querySelector('.message');
const enrolledlist = document.querySelector('.enrolledList');
const cardtitile = document.querySelector('.card-title');
const cardtext = document.querySelector('.card-text');
const enrolledlistforquiz = document.querySelector('.enrolledlistforquiz');

$(document).ready(function(){
  $('.tabs').tabs();
});

enroll.addEventListener('click' ,()=>{

    addCourse();
    takequiz();
    location = './takingcourse.html'

});

function addCourse(){

    let divelement = document.createElement('div');
    let hthree = document.createElement('h3');
    hthree.textContent = cardtitile.textContent;
    let p = document.createElement('p');
    p.textContent= cardtext.textContent;
    let aone = document.createElement('button');
    aone.textContent = 'go to course'
    let athree  = document.createElement('button');
    athree.textContent = 'remove course';
    divelement.appendChild(hthree);
    divelement.appendChild(p)
    divelement.appendChild(aone)
    divelement.appendChild(athree)
    enrolledlist.appendChild(divelement);
  

}

function removeCourse(){




}
function takequiz(){
  let divtwo = document.createElement('div');
  let h2 = document.createElement('h2');
  h2.textContent = cardtitile.textContent;
  let atwo = document.createElement('button');
  atwo.textContent = 'take a quiz';
 
  divtwo.appendChild(h2);
  divtwo.appendChild(atwo);

  enrolledlistforquiz.appendChild(divtwo);


}