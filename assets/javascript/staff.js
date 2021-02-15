const lecturerFullName = document.querySelector('#first_name');
const lecturerCountry = document.querySelector('#country');
const lecturerEmail = document.querySelector('#email');
const lCourseName = document.querySelector('#courseName');
const lCourseTitle =document.querySelector('#courseTitle');
const lCourseDetail = document.querySelector('#couresDetail');
const lCoruseImage = document.querySelector('#courseImage');
const message = document.querySelector('#message');

const submit = document.querySelector('#submit');
const reset = document.querySelector('#reset') ;

document.addEventListener('DOMContentLoaded' , ()=>{

  
          final_lecturerFullName = '';
          final_lecturerCountry  ='' ;
          final_lecturerEmail    = '';
          final_lCourseName      ='';
          final_lCourseTitle     ='';
          final_lCourseDetail    ='';
          final_lCoruseImage     ='';
          final_message = '';


            

            submit.addEventListener('click' , askforPermission);
            reset.addEventListener('click' , resetValue)


            function askforPermission(){
              let allrequiredinformation = {

                lecturerFullname : final_lCourseName=      lecturerFullName.value ,
                lecturerCountry  : final_lecturerCountry = lecturerCountry.value,
                lecturerAddress : final_lecturerEmail =    lecturerEmail.value,
                courseName : final_lCourseName =           lCourseName.value,
                courseTitle : final_lCourseTitle =         lCourseTitle.value,
                courseDiscription : final_lCourseDetail =  lCourseDetail.value,
                courseImage : final_lCoruseImage =         lCoruseImage.value,
                proposal : final_message =                 message.value


              }
    


              yondahStaff.staffs.put(allrequiredinformation)
              location = './index.html'
                


            }

            function resetValue(){
              lecturerFullName.value ='';
              lecturerCountry.value ='';
              lecturerEmail.value = '';
              lCourseName.value = '' ;
              lCourseTitle.value = '' ;
              lCourseDetail.value = '' ;
              lCoruseImage.value = '';
              message.value =''



            }






});

