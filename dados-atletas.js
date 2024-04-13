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

    removeMaiorMenorNota() {
        let notasOrdenadas = this.notasOrdemCrescente();
        let notasValidas = notasOrdenadas.slice(1, -1);
        return notasValidas;
    }

    calculaMediaValida() {
        let notasValidas = this.removeMaiorMenorNota();
        let media = notasValidas.reduce((atl, nota) => atl + nota, 0) / notasValidas.length;
        return media.toFixed(2);
    }

    obtemNomeAtleta() {
        return `Nome: ${this.nome}`;
    }

    obtemIdadeAtleta() {
        return `Idade: ${this.idade}`;
    }

    obtemPesoAtleta() {
        return `Peso: ${this.peso}`;
    }

    obtemAltura() {
        return `Altura: ${this.altura}`;
    }

    obtemNota(){
        return `Notas: ${this.notas}`;
    }
    obtemCategoria() {
        return `Categoria: ${this.calculaCategoria()}`;
    }

    obtemIMC() {
        return `IMC: ${this.calculaIMC()}`;
    }

    obtemMediaValida() {
        return `Média válida: ${this.calculaMediaValida()}`;
    }
}

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
