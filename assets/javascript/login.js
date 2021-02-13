// const login = document.querySelector('.login');
// login.addEventListener('click', ()=>{

//     location = './admin.html'

// });


const userEmailAddress = document.querySelector('#emailaddress');
const userPassword = document.querySelector('#userpassword');
const checkboxuser = document.querySelector('#checkboxuser');
const checkboxadmin = document.querySelector('#checkboxadmin');
const login = document.querySelector('#login');
const fullname = document.querySelector('#name');
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const submit = document.querySelector('#submit')


document.addEventListener('DOMContentLoaded' , ()=>{



        submit.addEventListener('click' , adduser );
        login.addEventListener('click' ,userAuthentication);



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
                location = './signupandlogin.html'
            }
            fullname.value = ""
            email.value = ""
            password.value = ""   


        };





        async function userAuthentication(event){

            event.preventDefault();

            useremail = userEmailAddress.value;
            userpass = userPassword.value;
            // newdb.users.each(user =>{
            
            //         allusers.push(user)
            // });
            let  allusers =  await   newdb.users.toArray()
            
            let verifyUser ;
            for (let index = 0; index < allusers.length; index++) {

                if(useremail == allusers[index].email && userpass == allusers[index].password){
                    verifyUser = true;
                }    
            }
            
            if(verifyUser == true && checkboxuser.checked){
                location = './student.html'
            }else if ((useremail === 'harry@admin.com' && userpass == 'password') && (checkboxadmin.checked)){
                location = './admin.html'

            }
            
            
            else{
                console.log("incorrect Email or password!");
                alert('incorrect Email,password or privilege!')
            }


        
            userEmailAddress.value ="";
            userPassword.value = ""


        }

})