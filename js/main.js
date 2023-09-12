//pesquisarCep recebe uma arrow Function
const pesquisarCep = async () => {

    const cep = document.getElementById('cep').value;

    //utilizando template string para concatenar uma string 
    const url = `http://viacep.com.br/ws/${cep}/json/`


    //modo para realizar a consulta utilizando fetch
    // fetch(url)
    //     .then(responde => responde.json())
    //     .then((dados) => console.log(dados));

    if(cepValido(cep)){
        const dados = await fetch(url);
        const endereco = await dados.json();

        // if(endereco.hasOwnProperty())

        preencheFormulario(endereco);
    }else{
        document.getElementById('logradouro').value = 'C.E.P. nao encontrado!';
    }
    
    // console.log(dados);
    // console.log(endereco);
    
}

const preencheFormulario = (endereco) =>{
    document.getElementById('logradouro').value = endereco.logradouro;
    document.getElementById('bairro').value = endereco.bairro;
    document.getElementById('cidade').value = endereco.localidade;
    document.getElementById('estado').value = endereco.uf;
}

//verifica a quantidade de digitos no campo cep
//verifica se todos os digitos sao numeros
//o acento circunflexo indica que o inicio da variavel precisa ser numero
//o sinal de mais(+) representa que pode ser um ou mais caracteres
//o $ indica que e o fim da validaçao 
//as duas / / nas extremidades indicam que a expressao que estao entre elas e o que deve ser validado

const cepValido = (cep) => cep.length === 8 && eNumero(cep);
const eNumero = (numero) => /^[0-9]+&/.test(numero);

// escuta todos os eventos relacionados ao controle  mencionado no Id, neste caso escuta o evento focus (quando o controle perde o foco), nesse momento ele aciona a funçao.

document.getElementById('cep').addEventListener('focusout', pesquisarCep);  