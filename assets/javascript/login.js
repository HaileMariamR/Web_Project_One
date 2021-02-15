
const userEmailAddress = document.querySelector('#emailaddress');
const userPassword = document.querySelector('#userpassword');
const radioUser = document.querySelector('#radioUser');
const radioAdmin = document.querySelector('#radioAdmin');
const login = document.querySelector('#login');
login.addEventListener("click", () => {
    console.log("Hello world")
})
document.addEventListener('DOMContentLoaded' , ()=>{


        login.addEventListener('click' ,userAuthentication);



        function adduser(e){
            e.preventDefault()

            alert("the login page is clicked")
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
                location = './loginPage.html'
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
            
            if(verifyUser == true && radioUser.checked){
                location = './student.html'
            }else if ((useremail === 'harry@admin.com' && userpass == 'password') && (radioAdmin.checked)){
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