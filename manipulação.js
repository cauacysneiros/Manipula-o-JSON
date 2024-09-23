let aluno = {
    nome: "Pedro Martins",
    idade: 21,
    curso: "Engenharia",
    notas: [7.5, 8.2, 9.0]
};

console.log("Nome do aluno", aluno.nome);
console.log("Nota da primeira disciplina", aluno.notas[0]);

aluno.idade = 22;
aluno.notas.push(9.5);

let alunoString = JSON.stringify(aluno);
console.log("Objeto aluno em formato de string JSON:", alunoString);

let alunoObjeto = JSON.parse(alunoString);

for (let propriedade in aluno){
    console.log('${propriedade}:, ${aluno[propriedade]}');
}

let somaNotas = aluno.notas.reduce((total, nota) => total + nota, 0);
let mediaNotas = somaNotas / aluno.notas.length;
console.log("Média das notas do aluno:", mediaNotas.toFixed(2));

aluno.endereco = {
    rua: "Rua das Flores",
    cidade: "São Paulo",
    estado: "SP"
};

console.log("Cidade do aluno:", aluno.endereco.cidade);
console.log("Estado do aluno", aluno.endereco.estado);

let alunos = [
    {
        nome: "Pedro Martins",
        idade: 22,
        curso: "Engenharia",
        notas: [7.5, 8.2, 9.0, 9.5],
        endereco: {
            rua: "Rua das Flores",
            cidade: "São Paulo",
            estado: "SP"
        }
    },
    {
        nome: "Diego Souza",
        idade: 20,
        curso: "Matemática",
        notas: [8.9, 9.1, 8.8],
        endereco:{
            rua: "Avenida Central",
            cidade: "Rio de Janeiro",
            estado: "RJ"
        }
    },
    {
        nome: "Carlos Eduardo",
        idade: 23,
        curso: "Física",
        notas: [6.7, 7.0, 8.2],
        endereco: {
            rua: "Praça da libertadores",
            cidade: "Belo Horizonte",
            estado: "MG"
        }
    }
];

let alunosComMediaAlta = alunos.filter(aluno => {
    let soma = aluno.notas.reduce((total, nota) => total + nota, 0);
    return media > 8
});

console.log("Alunos com média de notas superior a 8:", alunosComMediaAlta);
