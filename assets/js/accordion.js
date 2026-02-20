/*=============== ACCORDION ===============*/
const accordionItems = document.querySelectorAll(".accordion-item");

accordionItems.forEach((item) =>{
    const header = item.querySelector('.accordion-header'),
    content = item.querySelector('.accordion-content'),
    icon = item.querySelector('.accordion-header i');

    header.addEventListener('click' , () =>{
        const isOpen = item.classList.toggle('accordion-open');

        content.style.height=isOpen ? content.scrollHeight + 'px' : '0';

        icon.className = isOpen ? 'ri-subtract-line' : 'ri-add-line';

        accordionItems.forEach((otherItem) =>{
            if(otherItem !== item && otherItem.classList .contains('accordion-open')){
                otherItem.querySelector('.accordion-content').style.height = '0';

                otherItem.querySelector('.accordion-header i').className = 'ri-add-line';

                otherItem.classList.remove = 'accordion-open';
            }
        });
    });
});