const fullname = document.querySelector('#name');
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const submit = document.querySelector('#submit')

document.addEventListener('DOMContentLoaded' , ()=>{



      submit.addEventListener('click' , adduser );


      function adduser(e){
          e.preventDefault()

          if( !fullname.value == '' && !email.value=='' && !password.value == '' ){
              newdb.users.put({
                  fulname : fullname.value ,
                  email : email.value,
                  password:password.value
              
              })
              location.href= './student.html'



          }
          else{
              alert('fill all required info!')
              location = './signUpPage.html'
          }
          fullname.value = ""
          email.value = ""
          password.value = ""   


      };

});