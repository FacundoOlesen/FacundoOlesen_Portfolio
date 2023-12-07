const buttons = document.querySelectorAll(".menu-main p")

const about = document.getElementById('about')
const skills = document.querySelector('.cont-skills')
const proyects = document.getElementById('proyects')
const contact = document.getElementById('contact')
const cc = document.querySelector(".cc")
const img2= document.querySelector(".ms2")

const sections = [about, skills, proyects, contact]

about.classList.add("ms")
skills.classList.add("hidden");
proyects.classList.add("hidden");
contact.classList.add("hidden");




const buttonPressed = e => {
    let text = e.srcElement.innerHTML;
    if ((text.includes("About") || text.includes("Acerc"))) {
        about.classList.add("show")
        about.classList.remove("ms")
        skills.classList.remove("show");
        img2.classList.remove("ms2")
        proyects.classList.remove("show");
        contact.classList.remove("show");
        cc.classList.remove("show");

        skills.classList.add("hidden");
        proyects.classList.add("hidden");
        contact.classList.add("hidden");
        cc.classList.add("hidden");

    }
    else if (text.includes("Skills") || text.includes("Habil")) {

        skills.classList.add("show")

        about.classList.remove("show");
        proyects.classList.remove("show");
        contact.classList.remove("show");
        cc.classList.remove("show");

        about.classList.add("hidden");
        proyects.classList.add("hidden");
        contact.classList.add("hidden");
        cc.classList.add("hidden");

    }
    else if (text.includes("Proyec")) {
        proyects.classList.add("show")



        let icon = document.querySelectorAll('.like svg');
        for (const i of icon) {
            i.addEventListener("click", function () {
                i.classList.toggle('active');
            })
        }


        skills.classList.remove("show");
        about.classList.remove("show");
        contact.classList.remove("show");
        cc.classList.remove("show");

        skills.classList.add("hidden");
        about.classList.add("hidden");
        contact.classList.add("hidden");
        cc.classList.add("hidden");

    }
    else if (text.includes("Contact") || contact.className.includes("z")) {

        contact.classList.add("show")

        about.classList.remove("show");
        proyects.classList.remove("show");
        skills.classList.remove("show");

        about.classList.add("hidden");
        proyects.classList.add("hidden");
        skills.classList.add("hidden")
        let nameCLass = document.getElementById("contact")
        let name = nameCLass.className
        if (name.includes("z")) {
            cc.classList.add("show")
        }

    }
}

function toggle() {
    for (let button of buttons) {
        button.addEventListener("click", buttonPressed);
    }
}




skills.addEventListener("click", toggle())
proyects.addEventListener("click", toggle())
contact.addEventListener("click", toggle())
about.addEventListener("click", toggle())








const items = document.querySelectorAll('.menu-main p')

items[0].classList.add('class')



items.forEach(function (item) {
    item.onclick = function (e) {
        for (const i of items) {
            i.classList.remove('class')
        }
        item.classList.add('class')
    }
})




let es = document.querySelector('.es');
let en = document.querySelector('.en');

en.classList.add("hidden")

es.addEventListener("click", function () {
    es.classList.remove("show-lang")
    en.classList.remove("hidden")
    en.classList.add("show-lang")
    es.classList.add("hidden")
})

en.addEventListener("click", function () {
    en.classList.remove("show-lang")
    es.classList.remove("hidden")
    es.classList.add("show-lang")
    en.classList.add("hidden")
})


const ipts = document.querySelectorAll('.form input, .form textarea');

let name = ipts[0].value
let email = ipts[1].value
let msg = ipts[2].value


let date = new Date();
let year = date.getFullYear();
let month = date.toLocaleString('default', { month: 'long' }).substring(0, 3);
let day = date.getDate();

document.getElementById("date-form").innerHTML = day + " " + month + " " + year;





document.addEventListener("DOMContentLoaded", function () {
    const nav = document.querySelector(".cont-nav")
    window.addEventListener("scroll", (function () {
        var scroll = window.scrollY;
        if (scroll > 10) {
            nav.parentElement.classList.add("onscroll")
        }
        else {
            nav.parentElement.classList.remove("onscroll")

        }
    }))

});