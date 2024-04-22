// const accordion = document.getElementsByClassName("accordion");
// let i;

// for(i = 0; i < accordion.length; i++){
//     accordion[i].addEventListener("click", function(){
//         this.classList.toggle("active");
//     });
// }
// Accordion
const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");

accordionItemHeaders.forEach(accordionItemHeader => {
    accordionItemHeader.addEventListener("click", event => {
        const currentlyActiveAccordionItemHeader = document.querySelector(".accordion-item-header.active");
        if(currentlyActiveAccordionItemHeader && currentlyActiveAccordionItemHeader!==accordionItemHeader) {
            currentlyActiveAccordionItemHeader.classList.toggle("active");
            currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
        }


        accordionItemHeader.classList.toggle("active")
        const accordionItemBody = accordionItemHeader.nextElementSibling;
        if (accordionItemHeader.classList.contains("active")) {
            accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
        }
        else{
            accordionItemBody.style.maxHeight = 0;
        }
    });
});

// Dynamic Date
const year = new Date(). getFullYear();
const brand = "ReVibe"
const result = `${year} ${brand}`

document.getElementById("copyright").outerHTML = result