const langValue = document.querySelectorAll(".lang-icons div")

let jsonLang="proyectsES.json"
function changeLang(){
    langValue[0].addEventListener("click", function(){
        jsonLang="proyectsES.json"
        getData()
    }) 
    langValue[1].addEventListener("click", function(){
        jsonLang="proyectsEN.json"
        getData()
    }) 
    
    return jsonLang
}
jsonLang=changeLang()



function getData(){
    fetch(jsonLang)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            let cont = document.querySelector(".proyects");
            let out = "";
            for (let info of data) {
                out +=
                info.label2!="" ?   `
                <div class="cont-card">
                        <div class="pin">
                        ${info.svgPin}
                        <p>${info.pin}</p>
                    </div>
                    <div class="profile-data">
                        <img class="avatar" src="assets/me.jpeg" alt="Photo of me">
                        <div class="pdata">
                            <div class="data">
                                <p>Facundo 🤖</p>
                                <p class="point">•</p>
                                <p class="date">${info.date}</p>
                            </div>
                            <div class="labels">
                            <div class="label">
                                ${info.label}
                            </div>
                            <div class="label">
                            ${info.label2}
                        </div>
                            </div>
                            <h3>${info.title}</h3>
                            <p class="des">${info.text}</p>
                            <p class="link">${info.text2}<a href="${info.linkdeploy}" target="_blank"><span>${info.link}</span></a></p>
                            <p><span>#</span>${info.tags}</p>
                            <div class="me">
                            <img class="img-project" src="${info.image}" alt="Photo of the project.">
                            <div class="icons">
                           
                            <a class="linkpr" href="${info.linkpr}" target="_blank">
                                <svg class="link-pr" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                    class="w-5 h-5">
                                    <path fill-rule="evenodd"
                                        d="M19.902 4.098a3.75 3.75 0 00-5.304 0l-4.5 4.5a3.75 3.75 0 001.035 6.037.75.75 0 01-.646 1.353 5.25 5.25 0 01-1.449-8.45l4.5-4.5a5.25 5.25 0 117.424 7.424l-1.757 1.757a.75.75 0 11-1.06-1.06l1.757-1.757a3.75 3.75 0 000-5.304zm-7.389 4.267a.75.75 0 011-.353 5.25 5.25 0 011.449 8.45l-4.5 4.5a5.25 5.25 0 11-7.424-7.424l1.757-1.757a.75.75 0 111.06 1.06l-1.757 1.757a3.75 3.75 0 105.304 5.304l4.5-4.5a3.75 3.75 0 00-1.035-6.037.75.75 0 01-.354-1z"
                                        clip-rule="evenodd"></path>
                                </svg>
                                </a>
                                <div class="like" title="Like!">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z">
                                        </path>
                                    </svg>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
        
                    `
               : `
               <div class="cont-card">
                       <div class="pin">
                       ${info.svgPin}
                       <p>${info.pin}</p>
                   </div>
                   <div class="profile-data">
                       <img class="avatar" src="assets/me.jpeg" alt="Photo of me">
                       <div class="pdata">
                           <div class="data">
                               <p>Facundo 🤖</p>
                               <p class="point">•</p>
                               <p class="date">${info.date}</p>
                           </div>
                           <div class="labels">
                           <div class="label">
                               ${info.label}
                           </div>
                          
                           </div>
                           <h3>${info.title}</h3>
                           <p class="des">${info.text}</p>
                           <p class="link">${info.text2}<a href="${info.linkdeploy}" target="_blank"><span>${info.link}</span></a></p>
                           <p><span>#</span>${info.tags}</p>
                           <div class="me">
                           <img class="img-project" src="${info.image}" alt="Photo of the project.">
                           <div class="icons">
                           <a  class="linkpr" href="${info.linkpr}" target="_blank">
                               <svg class="link-pr" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                   class="w-5 h-5">
                                   <path fill-rule="evenodd"
                                       d="M19.902 4.098a3.75 3.75 0 00-5.304 0l-4.5 4.5a3.75 3.75 0 001.035 6.037.75.75 0 01-.646 1.353 5.25 5.25 0 01-1.449-8.45l4.5-4.5a5.25 5.25 0 117.424 7.424l-1.757 1.757a.75.75 0 11-1.06-1.06l1.757-1.757a3.75 3.75 0 000-5.304zm-7.389 4.267a.75.75 0 011-.353 5.25 5.25 0 011.449 8.45l-4.5 4.5a5.25 5.25 0 11-7.424-7.424l1.757-1.757a.75.75 0 111.06 1.06l-1.757 1.757a3.75 3.75 0 105.304 5.304l4.5-4.5a3.75 3.75 0 00-1.035-6.037.75.75 0 01-.354-1z"
                                       clip-rule="evenodd"></path>
                               </svg>
                               </a>
                               <div class="like" title="Like!">
                                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                       stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                       <path stroke-linecap="round" stroke-linejoin="round"
                                           d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z">
                                       </path>
                                   </svg>
                               </div>
                           </div>
                           </div>
                       </div>
                   </div>
               </div>
       
                   `
            }
            cont.innerHTML = out + `
        `
        })
}
getData()
