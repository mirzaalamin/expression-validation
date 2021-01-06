// Getting UI

    let email = document.querySelector(".email"),
        phone = document.querySelector(".phone"),
        postCode = document.querySelector(".post-code");
        

// Adding Event Listeners

    email.addEventListener("click", emailField);
    phone.addEventListener("click", phoneField);
    postCode.addEventListener("click", postCodeField);
    

// Define Functions

    function emailField(e){
        // mjapurbo5@gmail.com

        // let inputArea = document.querySelector(".input-area");
        // inputArea.innerHTML = `
        // <input type="email" placeholder="Enter Email">
        // <input type="submit" value="Validate">`;
        let re = /^([A-Za-z0-9]\.?)+[^\.]@([A-Za-z0-9]\.?)+[^\.]$/i;
        let userInput = prompt("Enter Email Address To Validate");
        let result = document.querySelector(".result-box h5");

        if(re.test(userInput)){
            result.className = "right";
            result.innerHTML = `${userInput} Is a Valid Email Address`;
        } else {
            result.className = "wrong";
            result.innerHTML = `${userInput} Is an Invalid Email Address`;
        }

        e.preventDefault();
    }

    function phoneField(e){
        // let inputArea = document.querySelector(".input-area");
        // inputArea.innerHTML = `<form action="">
        // <input type="number" placeholder="Enter Number">
        // <input type="submit" value="Validate">
        // </form>`;
        let re = /^(\+)?(88)?01[0-9]{9}$/i;
        let userInput = prompt("Enter Phone Number To Validate");
        let result = document.querySelector(".result-box h5");

        if(re.test(userInput)){
            result.className = "right";
            result.innerHTML = `${userInput} Is a Valid Phone Number`;
        } else {
            result.className = "wrong";
            result.innerHTML = `${userInput} Is an Invalid Phone Number`;
        }

        

        

        e.preventDefault();
    }

    function postCodeField(e){
        // let inputArea = document.querySelector(".input-area");
        // inputArea.innerHTML = `<form action="" class"form">
        // <input type="number" placeholder="Enter Post Code">
        // <input type="submit" value="Validate">
        // </form>`;
        let re = /^[0-9]{4}$/i;
        let userInput = prompt("Enter Post Code To Validate");
        let result = document.querySelector(".result-box h5");
        

        if(re.test(userInput)){
            result.className = "right";
            result.innerHTML = `${userInput} Is a Valid Post Code`;
        } else {
            result.className = "wrong";
            result.innerHTML = `${userInput} Is an Invalid Post Code`;
        }

        

        

        e.preventDefault();

        

    }

    