let options;
let items = []
while(options !=3){
    options= Number(prompt(` Olá usuário! Digite o número da opção desejada

    1. Cadastrar um item na lista
    2. Mostrar itens cadastrados
    3. Sair do programa`))
        switch(options){case 1:
            let item=prompt("Digite o nome do item")
            items.push(item)
            break
        case 2:
            if(items.length ==0){
            alert("Não a items cadastrados")
        } else{
            alert(items)
        }
        break
        case 3:
            alert("Ate mais")
            break
            default:
            alert("Opção invalida")
    }
}    
