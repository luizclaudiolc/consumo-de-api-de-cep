const cep = document.querySelector('#cep')

const mostraDados = (result) =>{
    for(const campo in result){
        if(document.querySelector('#'+campo)){
            document.querySelector('#'+campo).value = result[campo]
        }
    }
}

cep.addEventListener('blur', (evento)=>{
    let trocaTraco = cep.value.replace('-', '')
    const options = {
        method: 'get',
        mode: 'cors',
        cache: 'default'

    }
    fetch(`http://viacep.com.br/ws/${trocaTraco}/json/`, options)
        .then((response)=>{
            response.json().then(data => mostraDados(data))
        })
        .catch(evento => console.log('Algo deu errado'))
})

cep.addEventListener('keypress', (evento)=>{
    let trocaTraco = cep.value.replace('-', '')
    const options = {
        method: 'get',
        mode: 'cors',
        cache: 'default'

    }
    fetch(`http://viacep.com.br/ws/${trocaTraco}/json/`, options)
        .then((response)=>{
            response.json().then(data => mostraDados(data))
        })
        .catch(evento => console.log('Algo deu errado'))
})