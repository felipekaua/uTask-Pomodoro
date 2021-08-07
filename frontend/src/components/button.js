import './Form'
import './../css/Form.css'

window.addEventListener('load', (event) => {
    console.log('page is fully loaded');
    let input = document.querySelector(".caixaLogin");
    let inputsenha = document.querySelector(".caixaSenha");
    let button = document.querySelector(".button");
    
    input.addEventListener("change", stateHandle);
    inputsenha.addEventListener("change", stateHandle);
    
    function stateHandle() {
        if ((document.querySelector(".caixaLogin").value === "")) {
            if(document.querySelector(".caixaSenha").value === ""){
                button.disabled = true;
            }
        } 
        
        if(document.querySelector(".caixaLogin").value !== ""){
            if(document.querySelector(".caixaSenha").value ===""){
                button.disabled = true;
            }
        }

        if(document.querySelector(".caixaLogin").value !== ""){
            if(document.querySelector(".caixaSenha").value !==""){
                button.disabled = false;
            }
        }
    }
        
});
