

//--------------------------------------------------

document.addEventListener("DOMContentLoaded", function() {
    let signup = document.querySelector(".signup");
    let login = document.querySelector(".login");
    let slider = document.querySelector(".slider");
    let formSelection = document.querySelector(".form-selection");

    signup.addEventListener("click",()=>{
        slider.classList.add("moveslider");
        formSelection.classList.add("form-selection-move");
    });

    login.addEventListener("click",()=>{
        slider.classList.remove("moveslider");
        formSelection.classList.remove("form-selection-move");
    });

    function handleSignup(){
        let name  = document.querySelector(".signup-box .name").value;
        let email  = document.querySelector(".signup-box .email").value;
        let password  = document.querySelector(".signup-box .password").value;
        let confirmPassword  = document.querySelector(".signup-box .confirm-password").value;
        let mobile  = document.querySelector(".signup-box .mobile").value;
        let gender  = document.querySelector(".signup-box .gender").value;
        let dob  = document.querySelector(".signup-box .dob").value;
    
        // Check if password and confirm password match
        if (password !== confirmPassword) {
            alert("Passwords do not match. Please try again.");
            return;
        }
    
        let userData = {
            name : name,
            email : email,
            password : password,
            mobile: mobile,
            gender: gender,
            dob: dob
        };
    
        // Store user data in local storage
        localStorage.setItem('userData', JSON.stringify(userData));
        alert("Signup Successful!");
    }
    


    function handleLogin(){
        let email = document.querySelector(".login-box .email").value;
        let password = document.querySelector(".login-box .password").value;

        let userData = JSON.parse(localStorage.getItem("userData"));

        if(userData && userData.email === email && userData.password === password){
            alert("Login SuccessFull !");
            let url =window.location.origin +"/"+ window.location.pathname.split('/')[1]+"/dashboard";
            window.location.replace(url);
        }
        else{
            alert("Invalid email or Password, please try again");
        }

        
    }

    document.querySelector(".signup-btn").addEventListener("click",handleSignup);
    document.querySelector(".login-btn").addEventListener("click",handleLogin);
});


///-----------------------------------------------

// document.addEventListener("DOMContentLoaded", function() {
//     let signup = document.querySelector(".signup");
//     let login = document.querySelector(".login");
//     let slider = document.querySelector(".slider");
//     let formSelection = document.querySelector(".form-selection");

//     signup.addEventListener("click",()=>{
//         slider.classList.add("moveslider");
//         formSelection.classList.add("form-selection-move");
//     });

//     login.addEventListener("click",()=>{
//         slider.classList.remove("moveslider");
//         formSelection.classList.remove("form-selection-move");
//     });

//     function handleSignup(){
//         let name  = document.querySelector(".signup-box .name").value;
//         let email  = document.querySelector(".signup-box .email").value;
//         let password  = document.querySelector(".signup-box .password").value;
//         let confirmPassword  = document.querySelector(".signup-box .confirm-password").value;

//         // Validate if any field is empty
//         if(name.trim() === '' || email.trim() === '' || password.trim() === '' || confirmPassword.trim() === '') {
//             alert("Please fill in all fields.");
//             return;
//         }

//         // Validate if passwords match
//         if(password !== confirmPassword) {
//             alert("Passwords do not match. Please try again.");
//             return;
//         }

//         let userData = {
//             name : name,
//             email : email,
//             password : password
//         };

//         localStorage.setItem('userData', JSON.stringify(userData));

//         // Acknowledge signup
//         alert("Signup Successful!");
//     }


//     function handleLogin(){
//         let email = document.querySelector(".login-box .email").value;
//         let password = document.querySelector(".login-box .password").value;

//         // Validate if any field is empty
//         if(email.trim() === '' || password.trim() === '') {
//             alert("Please fill in all fields.");
//             return;
//         }

//         let userData = JSON.parse(localStorage.getItem("userData"));

//         if(userData && userData.email === email && userData.password === password){
//             alert("Login Successful!");
//         }
//         else{
//             alert("Invalid email or Password, please try again");
//         }
//     }

//     document.querySelector(".signup-btn").addEventListener("click",handleSignup);
//     document.querySelector(".login-btn").addEventListener("click",handleLogin);
// });


