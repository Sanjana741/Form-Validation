const form = document.getElementById("form")



const uname = document.getElementById("uname")


const email = document.getElementById("email")



const password = document.getElementById("password")

const cpassword = document.getElementById("cpassword")

const tandc= document.getElementById("tc")


form.addEventListener('submit',(e)=>{

    e.preventDefault()
    validate()
})



function validate(){
    let nameValue = uname.value.trim()
    let emailValue = email.value.trim()
    let passwordValue = password.value.trim()
    let cpasswordValue = cpassword.value.trim()
    let isValid=true

    //User name check

    if(nameValue===''){
        setError(uname,'user name cannot be empty')
        isValid=false
    }
    else if(nameValue.length<3){
        setError(uname,'user name should be minimum 3 characters')
          isValid=false
    }
    else{        
        setSuccesss(uname)
    }
    //email check
    if(emailValue===''){
        setError(email,'Eamil cannot be empty')
          isValid=false
    }  
    else if(!emailCheck(emailValue)){
        setError(email,'Enter Valid Email Id')
          isValid=false
    }
    else{        
        setSuccesss(email)
    }

    
    //Password check

    if(passwordValue===''){
        setError(password,'password cannot be empty')
          isValid=false
    }
    else if(passwordValue.length<8){
        setError(password,'password should be minimum 8 characters')
          isValid=false
    }
    else{        
        setSuccesss(password)
    }

      
    //Confirm Password check

    if(cpasswordValue===''){
        setError(cpassword,'confirm password cannot be empty')
          isValid=false
    }
    else if(cpasswordValue !==passwordValue){
        setError(cpassword,'both passwords not matched')
          isValid=false
    }else if(cpasswordValue.length<8){
        setError(cpassword,'confirm password should be minimum 8 characters')
          isValid=false
    }
    else{        
        setSuccesss(cpassword)
    }

     //Terms and conditions check

     if(!tandc.checked){
         
        setError(tc,'click on agree terms checkbox')    
           isValid=false
    }
    else{
        setSuccesss(tc)
    }
    if (isValid) {
        // Redirect to the thank you page
        window.location.href = "index.html";
    }
   
    function setError(input,message){
        let parent = input.parentElement;
        let small = parent.querySelector('small')
        small.innerText = message
        parent.classList.add('error')
        parent.classList.remove('success')
    }
    function setSuccesss(input){
        let parent = input.parentElement;
        parent.classList.add('success')
        parent.classList.remove('error')
    }


    function emailCheck(input){
        let emailReg = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
        let valid = emailReg.test(input)       
        return valid
    }
}


