document.addEventListener("DOMContentLoaded", () =>{
    const priceButton = document.querySelectorAll('.price-item');
    const sections = document.querySelectorAll('.tables');


    priceButton.forEach( button => {
        button.addEventListener( 'click', (event) => {
            
            priceButton.forEach( button => {
                button.classList.add('hidden');
            });
            event.target.classList.remove('hidden');

            const targetId = button.getAttribute('data-target');
            sections.forEach(section => {
                if (section.id === targetId){
                    section.style.display = 'block';
                } else {
                    section.style.display = 'none';
                }
            });
        });

    });


}); 