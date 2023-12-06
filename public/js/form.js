// show a message with a type of the input
function showMessage(input, message, type) {
    // get the small element and set the message
    const msg = input.parentNode.querySelector("small");
    const label = input.previousElementSibling
    msg.innerText = message;
    // update the class for the input
    input.id = type ? "success" : "error", "error2";
    label.id = type ? "" : "error2";
    return type;
}

function showError(input, message) {
    return showMessage(input, message, false);
}

function showSuccess(input) {
    return showMessage(input, "", true);
}

function hasValue(input, message) {
    if (input.value.trim() === "") {
        return showError(input, message);
    }
    return showSuccess(input);
}


function notEmpty(input) {
    if (input.value === "") {
        return false
    }
    return true
}

function validateEmail(input, requiredMsg, invalidMsg) {


    // check if the value is not empty
    if (!hasValue(input, requiredMsg)) {
        return false;
    }
    // validate email format
    const emailRegex =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const email = input.value.trim();
    if (!emailRegex.test(email)) {
        return showError(input, invalidMsg);
    }
    return true;
    ;
}












const form = document.querySelector(".form");
const btn = document.querySelector(".submit");

const NAME_REQUIRED = "¿Cómo te llamas?";
const EMAIL_REQUIRED = "Por favor ingresá tu email";
const EMAIL_INVALID = "Por favor ingresá un E-mail correcto";
const MESSAGE_INVALID = "Por favor ingresá un mensaje."
form.addEventListener("submit", function (event) {
    // stop form submission
    // validate the form
    let nameValid = hasValue(form.elements["name"], NAME_REQUIRED);
    let emailValid = validateEmail(form.elements["email"], EMAIL_REQUIRED, EMAIL_INVALID);
    let messageValid = hasValue(form.elements["message"], MESSAGE_INVALID)
    // if valid, submit the form.
    if (nameValid && emailValid && messageValid) {
        const title = document.querySelector(".form h5")
        const title2 = document.querySelector(".form h4")
        const formTitle= document.querySelector(".form-title")
        const cont = document.querySelector(".cont-ipt")
        const figForm = document.querySelector(".fig-form")
        const contact = document.querySelector(".contact")
        
        const form = document.querySelector(".form")
        const spinner = document.querySelector(".container")
        cont.classList.add("hide")
        formTitle.remove()
        title.remove()
        title2.remove()
        form.classList.add("form-load")
        spinner.classList.add("show")

      setTimeout(() => {
        
            const contact = document.querySelector(".contact")
            contact.remove()
            const card = document.querySelector(".cc")
            card.classList.remove("hidden")
            card.classList.add("show")
            card.classList.add("z")

        }, 3000);
       
    }
   
});






const input = document.querySelectorAll(".form input, .form textarea")
const label = document.querySelectorAll(".label1")
//VALIDO SI CAMPOS LLENOS => BUTTON VALIDADO
function allFill() {
    const btn = document.querySelector(".submit")
    let cont = -1;
    for (const i of input) {
        if (i.value != "") {
            cont++
        }
    }
    if ((cont == inputs.length - 1))
        btn.classList.add("able")
    else {
        btn.classList.remove("able")
        btn.disabled
    }

}





//ANIMACION DEL BORDER CUANDO CLICKEO INPUT
const inputs = document.querySelectorAll(".ipt input, .ipt textarea")
inputs.forEach(function (input) {
    input.addEventListener("click", function () {
        input.classList.add("ipt-clicked")
        for (const i of inputs) {
            if (i != input) {
                i.classList.remove("ipt-clicked")
            }
            else {
                i.classList.add("ipt-clicked")
                i.classList.remove("no-border")
            }
        }

    })
})

//ANIMACION DEL LABEL CUANDO CLICKEO INPUT
input.forEach(function (item) {
    item.onclick = function (item) {
        item.srcElement.previousElementSibling.classList.add("mover")
        for (const i of label) {
            if (i != item.srcElement.previousElementSibling) {
                i.classList.remove("mover")
                i.classList.remove("save")
                i.nextElementSibling.classList.remove("ipt-clicked")
                if (i.nextElementSibling.id == "success") {
                    i.nextElementSibling.id = ""
                }
            }
        }
    }
})


//SI CLICKEO FUERA DEL INPUT, DES-SELECCIONO EL INPUT QUITANDOLE EL BORDER
    window.addEventListener('click', function (e) {
        elemClickeado = document.querySelector(".ipt-clicked")
        let cont = document.querySelector('.cont-ipt')
        if (cont.contains(e.target) && e.target != cont) {
            e.target.classList.add("ipt-clicked")
             elemClickeado.classList.remove("error")

        }

        else {
            if(elemClickeado){
                elemClickeado.previousElementSibling.classList.remove("save")
                elemClickeado.classList.remove("ipt-clicked")
                elemClickeado.previousElementSibling.classList.remove("mover")
                elemClickeado.classList.add("no-border")

            }
        }
    });




function sacar(input) {
    if (notEmpty(input)) {
        input.previousElementSibling.classList.remove("mover")
        input.previousElementSibling.classList.add("mover-ph")
        input.previousElementSibling.classList.add("save")
        input.classList.remove("error")
        input.id = ""

    }
}






