const displayMessage = document.querySelector('.status-message');
const checkBoxContainer = document.querySelectorAll('.input-container');
const progressElement = document.querySelector('.progress');
let progress = 0;
let step = 100/checkBoxContainer.length;

checkBoxContainer.forEach(container=>{
        const checkbox = container.querySelector('.checkbox');
        const inputElement = container.querySelector('.input-text');
        const imageElement = container.querySelector('.check-image');

        checkbox.addEventListener("click",()=>{

            if(inputElement.value === ""){
                displayMessage.innerText = "Please Set Your Goals First"
                displayMessage.classList.add('text-red-500');
                checkbox.classList.add('border-red-500')
                container.classList.add('border-red-500');
            }
            else{
                checkbox.classList.toggle('border-green-400');
                imageElement.classList.toggle('hidden');
                inputElement.classList.toggle('line-through');
                 displayMessage.innerText="Enter your goals"
                 displayMessage.classList.remove('text-red-500');
                 container.classList.remove('border-red-500');
                 container.classList.toggle('border-green-500');
                 checkbox.classList.remove('border-red-500');
                 checkbox.classList.toggle('border-green-500')


            if(checkbox.classList.contains('border-green-500')){

                    progress +=step;
                    if(progress === 100/3){
                        displayMessage.innerText = "Way to go"
                    }
                    else if (progress === 200/3){
                        displayMessage.innerText = "One more to go"
                    }
                }
                else{
                    progress -=step;
                }
                const checkedCheckboxes = document.querySelectorAll('.border-green-500').length;
                if (checkedCheckboxes === 0) {
                    progress = 0;
                }

                progressElement.style.width = `${progress}%`

                if (progress >= 100) {
                    displayMessage.innerText = "All goals are complete!";
                    displayMessage.classList.add('text-green-500');
                }
                else {
                    
                    displayMessage.classList.remove('text-green-500');
                }
            }
            
        })


})