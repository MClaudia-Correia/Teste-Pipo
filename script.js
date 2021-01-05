console.log('oi')

window.addEventListener('DOMContentLoaded', () => {


    //const button = document.getElementsByClassName('form_btn');
    const formList = document.getElementById('formList')
    const inputNome = document.getElementById('nome')
    const inputIdade = document.getElementById('idade')
    const inputPeso =  document.getElementById('peso')
    const inputAltura = document.getElementById('altura')
    const inputCPF = document.getElementById('cpf')
    const inputCliente = document.getElementById('cliente')
    const inputDataAdmissao = document.getElementById('dataAdmissao')
    const inputEndereco = document.getElementById('endereco')
    const inputEmail = document.getElementById('email')
    const inputBeneficios = document.querySelector('#beneficios')
    const addTarefa = document.createElement('li');
    const textoP = document.createElement('p');
    


formList.addEventListener('submit', (e) => { 
    e.preventDefault();

    let nome = inputNome.value, idade = inputIdade.value, peso = inputPeso.value, altura = inputAltura.value, cpf = inputCPF.value, cliente = inputCliente.value, dataAdmissao = inputDataAdmissao.value, endereco = inputEndereco.value, email = inputEmail.value, beneficios = inputBeneficios.value;
    console.log(nome, idade, peso, altura, cpf, dataAdmissao, endereco, email, beneficios); 
   
  
    

    })

    inputCliente.addEventListener('click', (e) => {

        const cliente = Number(e.target.value)
         console.log(cliente)
        if (cliente === 1) {
        console.log('entrei aqui')
            inputBeneficios.removeAttribute("disabled")
            inputBeneficios.innerHTML=
         ` <option value="1">Norte Europa</option>    
            <option value="2">Dental Sorriso</option>`
        } else if (cliente === 2) {
            inputBeneficios.removeAttribute("disabled")
            inputBeneficios.innerHTML=
         ` <option value="1">Pampulha Intermédica</option>    
            <option value="2">Dental Sorriso</option>
            <option value="3">Mente Sã, Corpo São</option>`
        } else {
            inputBeneficios.setAttribute("disabled", true)
        }
        textoP.innerText = inputNome.value, idade = inputIdade.value, peso = inputPeso.value, altura = inputAltura.value, cpf = inputCPF.value, cliente = inputCliente.value, dataAdmissao = inputDataAdmissao.value, endereco = inputEndereco.value, email = inputEmail.value, beneficios = inputBeneficios.value;
        formList.appendChild(addTarefa);
        addTarefa.appendChild(textoP);
    })

//Criar tabela Norte Europa
    // const norteEuropa = document.getElementById('norteEuropa')
    // // const norteEuropah2 = document.createElement("h2")
    // // norteEuropah2.innerText = "Ficha de inclusão Plano de saúde Norte Europa"
    // // norteEuropa.appendChild(norteEuropah2)
    // const table = document.createElement('table')
    // const tr = document.createElement('tr')
    // const th = document.createElement('th')
    // const tbody = document.createElement('tbody')
    // const td = document.createElement('td')
    
    // table.innerHTML = [

    // table.appendChild(tr);
    // table.appendChild(th);
    // table.appendChild(tbody)
    // table.appendChild(td)
     
    
// '<table>'
//     '<thead>'
//         '<tr>'
//             '<th>id</th>'
//             '<th>col1</th>'
//             '<th>col2</th>'
//             '<th>col3</th>'
//         '</tr>'
//     '</thead>'
//     '<tbody>'
//         '<tr>'
//             '<td>idNorteEuropa</td>'
//             '<td>Nome</td>'
//             '<td>CPF</td>'
//             '<td>DataAdmissão</td>'
//             '<td>E-mail</td>'
//         '</tr>'
//         '</tbody>'
// '</table>'

// ].join("\n")
//Tabela Pampulha Intermédica 

    // const norteEuropa = document.getElementById('pampulhaIntermedica')
    // const pampulhaIntermedicah2 = document.createElement("h2")
    // pampulhaIntermedicah3.innerText = "Ficha de inclusão Plano de saúde Pampulha Intermédica"
    // pampulhaIntermedica.appendChild(pampulhaIntermedicah2)
    // const table = document.createElement('table')
    // const tr = document.createElement('tr')
    // const th = document.createElement('th')
    // const tbody = document.createElement('tbody')
    // const td = document.createElement('td')
    

    // table.innerHTML = [

    // table.appendChild(tr);
    // table.appendChild(th);
    // table.appendChild(tbody)
    // table.appendChild(td)
     

   
        // '<table>'
        //     '<thead>'
        //         '<tr>'
        //             '<th>id</th>'
        //             '<th>col1</th>'
        //             '<th>col2</th>'
        //             '<th>col3</th>'
        //         '</tr>'
        //     '</thead>'
        
        //     '<tbody>'
        //     '<tr>'
        //         '<td>idPampulhaIntermedica</td>'
        //         '<td>Nome</td>'
        //         '<td>CPF</td>'
        //         '<td>DataAdmissão</td>'
        //         '<td>Endereço</td>'
        //     '</tr>'
        //     '</tbody>'
        //     '</table>'

// ].join("\n")

//Tabela Dental Sossiso

//     const dentalSorriso = document.getElementById('dentalSorriso')
//     const dentalSorrisoh2 = document.createElement("h2")
//     dentalSorriso.innerText = "Ficha de inclusão Plano Odontológico Dental Sorriso"
//     dentalSorriso.appendChild(dentalSorrisoh2)
//     const table = document.createElement('table')
//     const tr = document.createElement('tr')
//     const th = document.createElement('th')
//     const tbody = document.createElement('tbody')
//     const td = document.createElement('td')
    

    
//     table.innerHTML = [

//     table.appendChild(tr);
//     table.appendChild(th);
//     table.appendChild(tbody)
//     table.appendChild(td)


//         '<table>'
//             '<thead>'
//                 '<tr>'
//                     '<th>id</th>'
//                     '<th>col1</th>'
//                     '<th>col2</th>'
//                     '<th>col3</th>'
//                 '</tr>'
//             '</thead>'
        
//             '<tbody>'
//             '<tr>'
//                 '<td>iddentalSorriso</td>'
//                 '<td>Nome</td>'
//                 '<td>CPF</td>'
//                 '<td>Peso</td>'
//                 '<td>Altura</td>'
//             '</tr>'
//             '</tbody>'
//             '</table>'

//  ].join("\n")
//Tabela Mente Sã, Corpo São

    // const menteSã = document.getElementById('menteSã')
    // const menteSãh2 = document.createElement("h2")
    // menteSãh2.innerText = "Ficha de inclusão Plano de saúde mental Mente Sã, Corpo São"
    // menteSã.appendChild(menteSãh2)
    // const table = document.createElement('table')
    // const tr = document.createElement('tr')
    // const th = document.createElement('th')
    // const tbody = document.createElement('tbody')
    // const td = document.createElement('td')
    
    // table.innerHTML = [

    // table.appendChild(tr);
    // table.appendChild(th);
    // table.appendChild(tbody)
    // table.appendChild(td)

   
    //     '<table>'
    //         '<thead>'
    //             '<tr>'
    //                 '<th>id</th>'
    //                 '<th>col1</th>'
    //                 '<th>col2</th>'
    //             '</tr>'
    //         '</thead>'
        
    //         '<tbody>'
    //         '<tr>'
    //             '<td>idmenteSã</td>'
    //             '<td>Nome</td>'
    //             '<td>horasMeditadas</td>'
                
    //         '</tr>'
    //         '</tbody>'
    //         '</table>'

    // ].join("\n")







    // const tr = document.createElement('tr')
//     const thNome = document.createElement('th')
//     thNome.innerText="nome"
//     const thCPF= document.createElement('th').innerText="CPF"
//     const thDataAdmissão = document.createElement('th')
//     const thEmail = document.createElement('th')
//     table.appendChild(tr); tr.appendChild( thNome)
//    console.log(tr)
//  })
    

});