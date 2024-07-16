class Entidade {
    constructor(id, nome, logradouro, numero, cep, bairro, cidade, uf, telefone, cpfCnpj) {
        this.id = id;
        this.nome = nome;
        this.logradouro = logradouro;
        this.numero = numero;
        this.cep = cep;
        this.bairro = bairro;
        this.cidade = cidade;
        this.uf = uf;
        this.telefone = telefone;
        this.cpfCnpj = cpfCnpj;
    }
}

class Associado extends Entidade {
    constructor(id, nome, logradouro, numero, cep, bairro, cidade, uf, telefone, cpfCnpj, situacao, numeroAssociado) {
        super(id, nome, logradouro, numero, cep, bairro, cidade, uf, telefone, cpfCnpj);
        this.situacao = situacao;
        this.numeroAssociado = numeroAssociado;
    }
}

class Colaborador extends Entidade {
    constructor(id, nome, logradouro, numero, cep, bairro, cidade, uf, telefone, cpfCnpj, cargo) {
        super(id, nome, logradouro, numero, cep, bairro, cidade, uf, telefone, cpfCnpj);
        this.cargo = cargo;
    }
}

class Fornecedor extends Entidade {
    constructor(id, nome, logradouro, numero, cep, bairro, cidade, uf, telefone, cpfCnpj, nomeFantasia, website) {
        super(id, nome, logradouro, numero, cep, bairro, cidade, uf, telefone, cpfCnpj);
        this.nomeFantasia = nomeFantasia;
        this.website = website;
    }
}

let associados = [];
let colaboradores = [];
let fornecedores = [];

function adicionarAssociado() {
    let id = document.querySelector('#associadoForm #id').value;
    let nome = document.querySelector('#associadoForm #nome').value;
    let logradouro = document.querySelector('#associadoForm #logradouro').value;
    let numero = document.querySelector('#associadoForm #numero').value;
    let cep = document.querySelector('#associadoForm #cep').value;
    let bairro = document.querySelector('#associadoForm #bairro').value;
    let cidade = document.querySelector('#associadoForm #cidade').value;
    let uf = document.querySelector('#associadoForm #uf').value;
    let telefone = document.querySelector('#associadoForm #telefone').value;
    let cpfCnpj = document.querySelector('#associadoForm #cpfCnpj').value;
    let situacao = document.querySelector('#associadoForm #situacao').value;
    let numeroAssociado = document.querySelector('#associadoForm #numeroAssociado').value;

    let associado = new Associado(id, nome, logradouro, numero, cep, bairro, cidade, uf, telefone, cpfCnpj, situacao, numeroAssociado);
    associados.push(associado);

    mostrarAssociados();
}

function mostrarAssociados() {
    let lista = document.getElementById('listaAssociados');
    lista.innerHTML = '';
    associados.forEach((associado, index) => {
        lista.innerHTML += `<div class="card my-2">
                                <div class="card-body">
                                    <h5 class="card-title">${associado.nome}</h5>
                                    <p class="card-text">${associado.logradouro}, ${associado.numero}, ${associado.bairro}, ${associado.cidade} - ${associado.uf}</p>
                                    <p class="card-text">Telefone: ${associado.telefone}</p>
                                    <p class="card-text">CPF/CNPJ: ${associado.cpfCnpj}</p>
                                    <p class="card-text">Situação: ${associado.situacao}</p>
                                    <p class="card-text">Número de Associado: ${associado.numeroAssociado}</p>
                                    <button class="btn btn-danger" onclick="removerAssociado(${index})">Remover</button>
                                </div>
                            </div>`;
    });
}

function removerAssociado(index) {
    associados.splice(index, 1);
    mostrarAssociados();
}

function adicionarColaborador() {
    let id = document.querySelector('#colaboradorForm #id').value;
    let nome = document.querySelector('#colaboradorForm #nome').value;
    let logradouro = document.querySelector('#colaboradorForm #logradouro').value;
    let numero = document.querySelector('#colaboradorForm #numero').value;
    let cep = document.querySelector('#colaboradorForm #cep').value;
    let bairro = document.querySelector('#colaboradorForm #bairro').value;
    let cidade = document.querySelector('#colaboradorForm #cidade').value;
    let uf = document.querySelector('#colaboradorForm #uf').value;
    let telefone = document.querySelector('#colaboradorForm #telefone').value;
    let cpfCnpj = document.querySelector('#colaboradorForm #cpfCnpj').value;
    let cargo = document.querySelector('#colaboradorForm #cargo').value;

    let colaborador = new Colaborador(id, nome, logradouro, numero, cep, bairro, cidade, uf, telefone, cpfCnpj, cargo);
    colaboradores.push(colaborador);

    mostrarColaboradores();
}

function mostrarColaboradores() {
    let lista = document.getElementById('listaColaboradores');
}
