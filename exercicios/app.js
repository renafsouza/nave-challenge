const axios = require(`axios`)
const e1 = (str1, str2)=>{
    return str1.length>=str2.length?str1:str2;
}
const e2 = (f, str1, str2)=>{
    console.log(f(str1, str2))
}
const e3 = function(){
    console.log(...arguments)
}

{(async()=>{
    console.log(`## Exercicio 1`)
    console.log(`Input ("abc","abcd")`)
    console.log(e1("abc","abcd"))
    console.log(`Input ("adasd","ada")`)
    console.log(e1("adasd","ada"))
    console.log()

    console.log(`## Exercicio 2`)
    console.log(`Input (e1, "abc","abcd")`)
    e2(e1,"abc","abcd")
    console.log(`Input (e1, "adasd","ada")`)
    e2(e1,"adasd","ada")
    console.log()

    console.log(`## Exercicio 3`)
    console.log(`Input ("a","b","d","3")`)
    e3("a","b","d","3")
    console.log(`Input ("d","g","a","c")`)
    e3("d","g","a","c")
    console.log()

    console.log(`## Exercicio 4`)
    let str = `teste 1 de 2 string 3`
    console.log(`Input: "teste 1 de 2 string 3"`)
    console.log(`Output: `,str.replace(/[0-9]+/g,`[removido]`))
    console.log()

    console.log(`## Exercicio 5`)
    let dict = {4: `a`, 3: `e`, 1: `i`, 5: `s`}
    str = `T35t3 d3 35t4g1o`
    for(let i = 0;i<str.length;i++){
        let c = str[i]
        if(dict[c])
            str = `${str.substr(0, i)}${dict[c]}${str.substr(i + 1)}`
    }
    console.log(`Input: "T35t3 d3 35t4g1o"`)
    console.log(`Output: `,str);
    console.log()

    console.log(`## Exercicio 6`)
    try{
        let cep = `96071344`
        let res = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
        let data = res.data
        // CEP não aponta número, só rua.
        console.log(`Output: ${data.logradouro}, ${`numero`}, ${data.localidade}/${data.uf}`)
    }catch(e){
        console.log(e)
    }
    console.log()

    console.log(`## Exercicio 7`)
    let people = [
        {id: 1, nome: `juca`, sobrenome: `da silva`, idade: 42},
        {id: 2, nome: `daniel`, sobrenome: `gonçalves`,  idade: 21},
        {id:3, nome: `matheus`, sobrenome: `garcia`, idade: 28},
        {id: 4, nome: `gabriel`, sobrenome: `pinheiro`,  idade: 21}
    ]
    people.forEach((person) => {
        console.log(`Olá, ${person.nome} ${person.sobrenome}!`)
    })
    console.log()

    console.log(`## Exercicio 8`)
    console.log(`Output: `,people.reduce((total, person, i) => {
        return i-1?total+person.idade:total.idade+person.idade
    }))
    console.log()

    console.log(`## Exercicio 9`)
    console.log(`Output: `,people.filter(person => {
        return person.idade<25;
    }))
    console.log()

    console.log(`## Exercicio 10`)
    console.log(`Output: `,people.filter(person => {
        return person.idade<30;
    }))
    console.log()

    console.log(`## Exercicio 11`)
    console.log(`Output: `,people.sort((p1, p2) => {
        return p1.idade!=p2.idade?p1.idade-p2.idade:p1.id-p2.id
    }))
})()}