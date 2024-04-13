class Atleta {
    constructor({nome, idade, peso, altura, notas}) {
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
        this.altura = altura;
        this.notas = notas;
    }
// calcula a categoria do atleta por sua idade;

    calculaCategoria() {
        let categoria = this.idade;

        if (categoria < 9) {
            return "Participação não permitida";
        }
        if (categoria >= 9 && categoria <= 11) {
            return "Infantil";
        }
        else if (categoria >= 12 && categoria <= 13) {
            return "Juvenil";
        }
        else if (categoria >= 14 && categoria <= 15) {
            return "Intermediario";
        }
        else if (categoria >= 16 && categoria <= 30) {
            return "Adulto";
        }
        else {
            return "Demais idades";
        }
    }
// Calcula o indice de massa corporal dos atletas;

    calculaIMC() {
        let imc = this.peso / (this.altura * this.altura);
        return imc.toFixed(2);
    }
// Organiza as notas em ordem crescente;

    notasOrdemCrescente() {
        let notasOrdenadas = this.notas.sort((a, b) => a - b);
        return notasOrdenadas;
    }
// Remove a maior e menor nota dos atletas;

    removeMaiorMenorNota() {
        let notasOrdenadas = this.notasOrdemCrescente();
        let notasValidas = notasOrdenadas.slice(1, -1);
        return notasValidas;
    }
// Calcula a média das notas válidas dos atletas;

    calculaMediaValida() {
        let notasValidas = this.removeMaiorMenorNota();
        let media = notasValidas.reduce((atl, nota) => atl + nota, 0) / notasValidas.length;
        return media.toFixed(2);
    }
// Retorna o nome do atleta;

    obtemNomeAtleta() {
        return `Nome: ${this.nome}`;
    }
// Retorna a idade do atleta:

    obtemIdadeAtleta() {
        return `Idade: ${this.idade}`;
    }
// Retorna o peso do atleta;

    obtemPesoAtleta() {
        return `Peso: ${this.peso}`;
    }
// Retorna a altura dos atleta;

    obtemAltura() {
        return `Altura: ${this.altura}`;
    }
// Retorna as notas dos atletas;

    obtemNota(){
        return `Notas: ${this.notas}`;
    }
// Retorna a categoria do atleta por sua idade;

    obtemCategoria() {
        return `Categoria: ${this.calculaCategoria()}`;
    }
//  Retorna o indice de massa corporal do atleta;

    obtemIMC() {
        return `IMC: ${this.calculaIMC()}`;
    }
// Retorna a média das notas válidas do atleta;

    obtemMediaValida() {
        return `Média válida: ${this.calculaMediaValida()}`;
    }
}
// variavel contendo a relação com os dados dos atletas;

let atletas = [
    {
        nome: "Cesar Abascal",
        idade: 10,
        peso: 75,
        altura: 1.45,
        notas: [10, 9.34, 8.42, 10, 7.88]
    },
    {
        nome: "Fernando Puntel",
        idade: 14,
        peso: 65,
        altura: 1.60,
        notas: [8, 10, 10, 7, 9.33]
    },
    {
        nome: "Daiane Jelinsky",
        idade: 20,
        peso: 68,
        altura: 1.55,
        notas: [7, 10, 9.5, 9.5, 8]
    },
    {
        nome: "Bruno Castro",
        idade: 13,
        peso: 65,
        altura: 1.65,
        notas: [10, 10, 10, 9, 9.5]
    }
].map(atleta => new Atleta(atleta));

// O laço for cria uma variavel atleta e atribui os dados da variavel atletas;
// Percorrendo na class Atletas e retornando os dados requisitados pelo console;

for (let atleta of atletas) {
    console.log(atleta.obtemNomeAtleta());
    console.log(atleta.obtemIdadeAtleta());
    console.log(atleta.obtemPesoAtleta());
    console.log(atleta.obtemAltura());
    console.log(atleta.obtemNota());
    console.log(atleta.obtemCategoria());
    console.log(atleta.obtemIMC());
    console.log(atleta.obtemMediaValida());
    console.log("==============")
}
