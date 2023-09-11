//pesquisarCep recebe uma arrow Function
const pesquisarCep = () =>  {

    const cep = document.getElementById('cep').value;
    
    //utilizando template string para concatenar uma string 
    const url = `viacep.com.br/ws/${cep}/json/`

}

// escuta todos os eventos relacionados ao controle  mencionado no Id, neste caso escuta o evento focus (quando o controle perde o foco), nesse momento ele aciona a funçao.
document.getElementById('cep').addEventListener('focusout', pesquisarCep);  