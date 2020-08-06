//procurar botão
document.querySelector("#add-time")
//evento, quando clicar no botão executa clonefield
.addEventListener('click', cloneField);

//executa ação
function cloneField() {
    //duplicar campos, quais campos?
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true);
    //const -> valor "não" pode ser alterado futuramente


    //limpar os campos. quais campos?
    //recebe todos os inputs encontrando no .schedule-item
    const fields = newFieldContainer.querySelectorAll('input');

    //já troca na raíz do document
    fields.forEach(function(field){
        //pegar field do momento
        field.value="";
    })

    //colocar na página. Onde?
    document.querySelector('#schedule-items').appendChild(newFieldContainer);
}