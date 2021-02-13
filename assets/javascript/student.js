

$(document).ready(function(){
  $('.tabs').tabs();
});

// enroll.addEventListener('click' ,()=>{

//     addCourse();
//     takequiz();
//     location = './takingcourse.html'

// });

// function addCourse(){

//     let divelement = document.createElement('div');
//     let hthree = document.createElement('h3');
//     hthree.textContent = cardtitile.textContent;
//     let p = document.createElement('p');
//     p.textContent= cardtext.textContent;
//     let aone = document.createElement('button');
//     aone.textContent = 'go to course'
//     let athree  = document.createElement('button');
//     athree.textContent = 'remove course';
//     divelement.appendChild(hthree);
//     divelement.appendChild(p)
//     divelement.appendChild(aone)
//     divelement.appendChild(athree)
//     enrolledlist.appendChild(divelement);
  

// }

// function removeCourse(){




// }
// function takequiz(){
//   let divtwo = document.createElement('div');
//   let h2 = document.createElement('h2');
//   h2.textContent = cardtitile.textContent;
//   let atwo = document.createElement('button');
//   atwo.textContent = 'take a quiz';
 
//   divtwo.appendChild(h2);
//   divtwo.appendChild(atwo);

//   enrolledlistforquiz.appendChild(divtwo);


// }

const allCoursePlaceholder = document.querySelector('.allCoursePlaceholder')
const search = document.querySelector('#search');

allCourseInformation = [

  { 
    courseName:"Javascript",
    courseTitle:"The Complete Javascript crush Course",
    courseDetail:'The modern JavaScript course for everyone! Master JavaScript with projects, challenges and theory. Many courses in one',
    courseImage:'https://i.picsum.photos/id/0/200/300.jpg?hmac=0pq7Zy79Vy4K-8w1qAMo1ppYmPvl-7lvwSx-LyZ7vNY'

    }

  ]

document.addEventListener('DOMContentLoaded' , async()=>{

    // courseDatabase.courses.bulkAdd(allCourseInformation);


    search.addEventListener('keyup' , searchCourse);


    let getAllCourseInfo = await courseDatabase.courses.toArray();
    allCourseInformation.innerHTML = '';

    
    for (let index = 0; index < getAllCourseInfo.length; index++) {

        coursename = getAllCourseInfo[index].courseName;
        coursetitle = getAllCourseInfo[index].courseTitle;
        coursedetail = getAllCourseInfo[index].courseDetail;
        courseimage = getAllCourseInfo[index].courseImage;


        let oneCourse = document.createElement('div');
        oneCourse.className = 'card coursediv col-md-4' ;
        oneCourse.style.width = '25rem';
        oneCourse.style.height = '40rem';
        oneCourse.style.marginLeft = '2rem'

        oneCourse.innerHTML = `
                <img src="${courseimage}" class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 style="font-size:15px;color:cyan" class="card-title coursename">${coursename}</h5>
                  
                  <h2 style="font-size:15px;color:black">${coursetitle}</> 
                  <br>
                  <p style="" class="card-text">
                    ${coursedetail}
                  </p>
                  <p>5⭐⭐⭐⭐⭐</p>
                  <p style="color: brown">100 Students Enrolled</p>
                  <a href="#" class="btn btn-danger">Enroll</a>
                </div>
        `
        allCoursePlaceholder.appendChild(oneCourse)





    }


    function searchCourse(){

      let inputValue = search.value.toString().toUpperCase();
      let coursename = document.querySelectorAll('.coursename');
      for (let index = 0; index < coursename.length; index++) {
          let cNameValue = coursename[index].textContent.toString().toUpperCase();

          if((cNameValue.indexOf(inputValue)> -1)){
              coursename[index].parentElement.parentElement.style.display = 'block';
          }
          else{
            coursename[index].parentElement.parentElement.style.display = 'none';

          }
        
      }











    }




}); 