document.getElementById('Form').addEventListener('submit', function(event) {
    // event.preventDefault();
    
    let Form = document.getElementById('Form');
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let address = document.getElementById("address").value;
    let phoneNumber = document.getElementById("number").value;
    let residence = document.getElementById("residence").value;
    let pass1 = document.getElementById("pass1").value;
    let pass2 = document.getElementById("pass2").value;
    let gender = Form.gender.value;

    if(residence=='null'){
        alert("Select your residence")
    }
    else {
        if (pass1 == pass2){
            let formData = {
                Name : name,
                Email : email,
                Address : address,
                PhoneNumber : phoneNumber,
                Residence : residence,
                Gender : gender,
                Password : pass1,
            };
            saveFormData(formData);

            alert("Form submitted successfully.")
            document.form.reset();
        }
        else {
            alert("Password does not match. Please try again!!!")
        }
    }
});

function saveFormData(formData) {
    let storedFormData = JSON.parse(localStorage.getItem('formData')) || [];

    storedFormData.push(formData);
    localStorage.setItem('formData',JSON.stringify(storedFormData));
}

function pattern0(){
    document.getElementById("pass").innerHTML="Format: The password should contain 8-16 characters having atleast 1 number, 1 special character, 1 uppercase and lowercase letter "; 
}


