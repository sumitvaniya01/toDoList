function registerUser() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var mobile = document.getElementById("mobile").value;
    var gender = document.getElementById("gender").value;
    var dob = document.getElementById("dob").value;
    var password = document.getElementById("password").value;

    // Basic validation
    if (!name || !email || !mobile || !gender || !dob || !password) {
        alert("Please fill in all fields");
        return;
    }

    // Additional validation for email format
    if (!validateEmail(email)) {
        alert("Please enter a valid email address");
        return;
    }

    // Additional validation for mobile number format
    if (!validateMobile(mobile)) {
        alert("Please enter a valid mobile number");
        return;
    }

    // Additional validation for password strength (e.g., minimum length)
    if (password.length < 6) {
        alert("Password must be at least 6 characters long");
        return;
    }

    // Save user data to localStorage or any backend system
    var userData = {
        name: name,
        email: email,
        mobile: mobile,
        gender: gender,
        dob: dob,
        password: password
    };

    localStorage.setItem("userData", JSON.stringify(userData));

    // Hide registration form and show profile
    document.getElementById("registrationForm").style.display = "none";
    showProfile();
}

function logout() {
    // Clear user data from localStorage or any backend system
    localStorage.removeItem("userData");

    // Show registration form and hide profile
    document.getElementById("registrationForm").style.display = "block";
    document.getElementById("profile").style.display = "none";
}

function showProfile() {
    // localStorage.getItem(userData);
    const userData = JSON.parse(localStorage.getItem("userData"));
    // Display user profile
    document.getElementById("profileName").textContent = userData.name;
    document.getElementById("profileEmail").textContent = userData.email;
    document.getElementById("profileMobile").textContent = userData.mobile;
    document.getElementById("profileGender").textContent = userData.gender;
    document.getElementById("profileDOB").textContent = userData.dob;

    document.getElementById("profile").style.display = "block";
}

function editProfile() {
    var userData = JSON.parse(localStorage.getItem("userData"));

    // Populate edit profile form with current user data
    document.getElementById("editName").value = userData.name;
    document.getElementById("editEmail").value = userData.email;
    document.getElementById("editMobile").value = userData.mobile;
    document.getElementById("editGender").value = userData.gender;
    document.getElementById("editDOB").value = userData.dob;

    // Show edit profile form and hide profile
    document.getElementById("profile").style.display = "none";
    document.getElementById("editProfileForm").style.display = "block";
}


function saveProfile() {
    var newName = document.getElementById("editName").value;
    var newEmail = document.getElementById("editEmail").value;
    var newMobile = document.getElementById("editMobile").value;
    var newGender = document.getElementById("editGender").value;
    var newDOB = document.getElementById("editDOB").value;

    // Update user data in localStorage or any backend system
    var userData = JSON.parse(localStorage.getItem("userData"));
    userData.name = newName;
    userData.email = newEmail;
    userData.mobile = newMobile;
    userData.gender = newGender;
    userData.dob = newDOB;

    localStorage.setItem("userData", JSON.stringify(userData));

    // Update profile view
    showProfile(userData);

    // Hide edit profile form and show profile
    document.getElementById("editProfileForm").style.display = "none";
    document.getElementById("profile").style.display = "block";
}

function changePassword() {
    // Show change password form and hide profile
    document.getElementById("profile").style.display = "none";
    document.getElementById("changePasswordForm").style.display = "block";
}

function savePassword() {
    var currentPassword = document.getElementById("currentPassword").value;
    var newPassword = document.getElementById("newPassword").value;
    var confirmNewPassword = document.getElementById("confirmNewPassword").value;

    // Additional validation for password match
    if (newPassword !== confirmNewPassword) {
        alert("New passwords do not match");
        return;
    }

    // Update user password in localStorage or any backend system
    var userData = JSON.parse(localStorage.getItem("userData"));
    if (userData.password !== currentPassword) {
        alert("Current password is incorrect");
        return;
    }
    userData.password = newPassword;
    localStorage.setItem("userData", JSON.stringify(userData));

    // Hide change password form and show profile
    document.getElementById("changePasswordForm").style.display = "none";
    document.getElementById("profile").style.display = "block";
}

function cancelEdit() {
    // Hide edit profile form and show profile
    document.getElementById("editProfileForm").style.display = "none";
    document.getElementById("profile").style.display = "block";
}

function cancelPasswordChange() {
    // Hide change password form and show profile
    document.getElementById("changePasswordForm").style.display = "none";
    document.getElementById("profile").style.display = "block";
}

function validateEmail(email) {
    // Simple email validation using regular expression
    var emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
}

function validateMobile(mobile) {
    // Simple mobile number validation (10 digits)
    var mobileRegex = /^\d{10}$/;
    return mobileRegex.test(mobile);
}

function backToDashboard() {
    // Redirect to the dashboard page
    let url =window.location.hostname + window.location.pathname.split('/')[1]+"/dashboard";
    window.location.replace(url);
}

// Check if user is already logged in
document.addEventListener("DOMContentLoaded", function() {
    var userData = localStorage.getItem("userData");
    if (userData) {
        userData = JSON.parse(userData);
        showProfile(userData);
    }
});
