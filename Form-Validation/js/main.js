  let username = document.getElementById("userName")
    let password = document.getElementById("password")
    let flag = 1;
    function validateForm() {
        if (username.value == "") {
            document.getElementById("userError").innerHTML = "Please enter userName";
            flag = 0
        } else if (username.value.length < 3) {
            document.getElementById("userError").innerHTML = "Enter more then 3 latters in userName"
            flag = 0
        } else {
            document.getElementById("userError").innerHTML = ""
            flag = 1
        }

        if (password.value == "") {
            document.getElementById("passError").innerHTML = "password is empty"
            flag = 0
        } else {
            document.getElementById("passError").innerHTML = ""
            flag = 1
        }

        if (flag) {
            return true
        } else {
            return false
        }
    }