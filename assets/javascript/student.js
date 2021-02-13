

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
        oneCourse.style.height = '45rem';
        oneCourse.style.marginLeft = '2rem'

        oneCourse.innerHTML = `
                <img src="${courseimage}" class="courseimage card-img-top" alt="..." />
                <div class="card-body">
                  <h5 style="font-size:15px;color:cyan" class="card-title coursename">${coursename}</h5>
                  
                  <h2 coursetitle style="font-size:15px;color:black">${coursetitle}</h2> 
                  
                  <p coursedetail style="" class="card-text">
                    ${coursedetail}
                  </p>
                  <p>5⭐⭐⭐⭐⭐</p>
                  <p style="color: brown">100 Students Enrolled</p>
                  <a href="#" class="btn enroll btn-danger">Enroll</a>
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

      let enrollbtn = document.querySelectorAll('.enroll');
      // enrollbtn.addEventListener('click' ,courseEnrollment)
      for (let index = 0; index < enrollbtn.length; index++) {

            enrollbtn[index].addEventListener('click' , courseEnrollment)
        
      }





    async  function courseEnrollment(e){

        let enrolledCourseInfo = {

          enrolledcourseName:'',
          enrolledcourseTitle:'',
          enrolledcourseDetail:'',
          enrolledcourseImage:''


        }


        let enrollParentElement = e.target.parentElement;
        

        let courseinfo = enrollParentElement.children;

        enrolledCourseInfo.enrolledcourseName = courseinfo[0].textContent;
        enrolledCourseInfo.enrolledcourseTitle = courseinfo[1].textContent;
        enrolledCourseInfo.enrolledcourseDetail = courseinfo[2].textContent;
        enrolledCourseInfo.enrolledcourseImage = enrollParentElement.parentElement.children[0].src;

        studentCourse.courses.put(enrolledCourseInfo)



        location = './takingcourse.html'

       
        

      }



     


      //// for enrollment
         




    
      const enrolledList = document.querySelector('.enrolledList')

      
      let getAllEnrolledCourse = await studentCourse.courses.toArray();

      for (let index = 0; index < getAllEnrolledCourse.length; index++) {

          let img = getAllEnrolledCourse[index].enrolledcourseImage;
          let name = getAllEnrolledCourse[index].enrolledcourseName;
          let title = getAllEnrolledCourse[index].enrolledcourseTitle;
          let detail = getAllEnrolledCourse[index].enrolledcourseDetail;

          let newEnrolledCourseElement = document.createElement('div');
          newEnrolledCourseElement.className ='card coursediv col-md-12'

          newEnrolledCourseElement.innerHTML = ` <img src="${img}" class="courseimage card-img-top" alt="..." />
          <div class="card-body">
            <h5 style="font-size:15px;color:cyan" class="card-title coursename">${name}</h5>
            
            <h2 coursetitle style="font-size:15px;color:black">${title}</h2> 
            
            <p coursedetail style="" class="card-text">
              ${detail}
            </p>
            <p>5⭐⭐⭐⭐⭐</p>
            <p style="color: brown">100 Students Enrolled</p>
            <a href="#" class="btn enroll btn-danger"> go to course</a>
            <a href="#" class="btn remove btn-danger"> remove Course</a>
            <a href="#" class="btn takequiz btn-danger"> take quiz</a>


          </div>
        `
        enrolledList.appendChild(newEnrolledCourseElement)


          
      }

      
        //// remove course



      let removecoursebtn = document.querySelectorAll('.remove');
      for (let index = 0; index < removecoursebtn.length; index++) {
          removecoursebtn[index].addEventListener('click' , courseRemove)        
      }
    
       function courseRemove(e){

          e.target.parentElement.parentElement.style.display = 'none';
          let removedCourseName = e.target.parentElement.children[2].textContent;
          // studentCourse.courses.where('courseName').equals(`${removedCourseName}`).delete();

          


        //   studentCourse.transaction('rw', studentCourse.courses, function* () {
        //     var deleteCount = yield studentCourse.courses
        //         .where("courseName").equals(removedCourseName).delete();
        
        //     console.log ("Successfully deleted " + deleteCount + " items");
        //  }).catch (e => {
        //     console.error (e);
        // });

      }



      









    




}); 