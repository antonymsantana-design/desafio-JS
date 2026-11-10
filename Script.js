import readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const rl = readline.createInterface({ input, output });

/* questão 1 */
/* let alu = await rl.question('nome ');
let n1 = await rl.question("nota 1 ");
let n3 = await rl.question("nota 2 ")
let n2 = await rl.question("nota 3 ")

let media = (parseFloat(n1) + parseFloat(n2) + parseFloat(n3)) / 3;
if (media >= 7) {
    console.log(`Aluno ${alu} aprovado com média ${media.toFixed(2)}`);
}else{
    console.log(`Aluno ${alu} reprovado com média ${media.toFixed(2)}`);
} */

/* questão 2 */
/* let n = await rl.question('numero inteiro de 1 a 20 ')

for (let i = 1; i < 11; i++) {
    console.log(`${n} x ${i} = ${n * i}`);
}
 */

/* questão 3 */

/* async function calculardesconto(){
let n = await rl.question('nome do produto ')
let vu = await rl.question('valor unitario ')
let q = await rl.question('quantidade ')
let pd = await rl.question('percentual de desconto ')

if (pd < 0 || pd > 100 || vu <= 0 || q <= 0 || n == "") {
    console.log('algum numero invalido');
}
console.log(`subtotal: ${vu * q}`);
console.log(`desconto: ${(pd / 100)*(vu * q)} total a pagar: ${(vu * q) - ((pd / 100)*(vu * q))}`);
}

await calculardesconto(); */

/* questão 4 */
/* let nA = 0
let alunos = [];
async function aluno() {
    
    let r = "s";

    while (r == "s") {
        let nome = await rl.question('nome do aluno ');
        let idade = await rl.question('idade do aluno ');
        let curso = await rl.question('curso do aluno ');
        let matricula = await rl.question('matricula do aluno ');

        alunos.push({
            nome: nome,
            idade: idade,
            curso: curso,
            matricula: matricula
        });

        nA += 1;
        r = await rl.question('deseja cadastrar outro aluno? (s/n) ');
    }
    alunos.forEach(aluno => {
        console.log(`nome: ${aluno.nome} idade: ${aluno.idade} curso: ${aluno.curso} matricula: ${aluno.matricula}`);
    });
 
    console.log(`${nA} aluno(s) cadastrado(s)`);
}

await aluno(); */

/* questão 5 */

/* let pNome = await rl.question('Digite o nome do aluno que deseja buscar: ');
    
    let alunoEncontrado = alunos.find(element => 
        element.nome.toLowerCase() === pNome.toLowerCase()
    );

    if (alunoEncontrado) {
        console.log(`Resultado da busca por nome: 1 encontrado`);
        console.log(`nome: ${alunoEncontrado.nome} idade: ${alunoEncontrado.idade} curso: ${alunoEncontrado.curso} matricula: ${alunoEncontrado.matricula}`);
    } else {
        console.log('Nenhum registro corresponder à pesquisa por nome.');
    }

    // 2. Filtro por Curso (usando filter)
    let pCurso = await rl.question('\nDigite o nome do curso para filtrar: ');
    
    let cursoFiltrado = alunos.filter(element => 
        element.curso.toLowerCase() === pCurso.toLowerCase()
    );

    if (cursoFiltrado.length > 0) {
        console.log(`Resultados encontrados para o curso: ${cursoFiltrado.length}`);
        cursoFiltrado.forEach(element => {
            console.log(`nome: ${element.nome} idade: ${element.idade} curso: ${element.curso} matricula: ${element.matricula}`);
        });
    } else {
        console.log('Nenhum registro corresponder à pesquisa por curso.');
    } */
/* 4 e 5 são juntas */

/* Questão 6 — Sistema de Estoque */
/* let nP = 0;
let estoque = [];

async function gerenciarEstoque() {
    let r = "s";

    // 1. Cadastro de Produtos
    while (r == "s") {
        let nome = await rl.question('nome do produto: ');
        let codigo = await rl.question('codigo do produto: ');
        let quantidade = parseInt(await rl.question('quantidade inicial: '));
        let preco = parseFloat(await rl.question('preço unitario: '));

        estoque.push({
            nome: nome,
            codigo: codigo,
            quantidade: quantidade,
            preco: preco
        });

        nP += 1;
        r = await rl.question('deseja cadastrar outro produto? (s/n) ');
    }

    // Função para mostrar a listagem atualizada e calcular o valor total
    function listarEstoque() {
        console.log('\n--- LISTAGEM DO ESTOQUE ---');
        let valorTotalEstoque = 0;

        estoque.forEach(element => {
            let totalProduto = element.quantidade * element.preco;
            valorTotalEstoque += totalProduto;

            // Destacar produtos com quantidade inferior a 5 unidades
            if (element.quantidade < 5) {
                console.log(`[ALERTA: ESTOQUE BAIXO] nome: ${element.nome} | codigo: ${element.codigo} | Qtd: ${element.quantidade} | Preço: R$${element.preco.toFixed(2)}`);
            } else {
                console.log(`nome: ${element.nome} | codigo: ${element.codigo} | Qtd: ${element.quantidade} | Preço: R$${element.preco.toFixed(2)}`);
            }
        });

        console.log(`Valor Total do Estoque: R$ ${valorTotalEstoque.toFixed(2)}`);
        console.log(`${nP} tipo(s) de produto(s) no sistema\n`);
    }

    // Mostra o estoque inicial
    listarEstoque();

    // 2. Movimentação de Entrada
    console.log('--- ENTRADA DE MERCADORIA ---');
    let codEntrada = await rl.question('Digite o codigo do produto para dar ENTRADA: ');
    let pEntrada = estoque.find(element => element.codigo === codEntrada);

    if (pEntrada) {
        let qtdEntrada = parseInt(await rl.question(`Quantas unidades de "${pEntrada.nome}" estão entrando? `));
        pEntrada.quantidade += qtdEntrada;
        console.log('Entrada realizada com sucesso!');
        listarEstoque(); // Atualiza a listagem
    } else {
        console.log('Produto não encontrado!');
    }

    // 3. Movimentação de Saída
    console.log('--- SAÍDA DE MERCADORIA ---');
    let codSaida = await rl.question('Digite o codigo do produto para dar SAÍDA: ');
    let pSaida = estoque.find(element => element.codigo === codSaida);

    if (pSaida) {
        let qtdSaida = parseInt(await rl.question(`Quantas unidades de "${pSaida.nome}" estão saindo? `));
        
        // Impedir saídas superiores à quantidade disponível
        if (qtdSaida > pSaida.quantidade) {
            console.log(`Erro: Saída não permitida! Estoque disponível atual é de apenas ${pSaida.quantidade} unidades.`);
        } else {
            pSaida.quantidade -= qtdSaida;
            console.log('Saída realizada com sucesso!');
        }
        listarEstoque(); // Atualiza a listagem final
    } else {
        console.log('Produto não encontrado!');
    }
}

await gerenciarEstoque();  */

/* questao 7 */

/* let nE = 0;
let estudantes = [];

async function gerenciarFrequencia() {
    let r = "s";

    // 1. Cadastro de Estudantes (Baseado na Questão 4)
    console.log('--- CADASTRO DE ESTUDANTES ---');
    while (r == "s") {
        let nome = await rl.question('nome do estudante: ');
        let matricula = await rl.question('matricula: ');
        let turma = await rl.question('turma: ');
        let curso = await rl.question('curso: ');

        estudantes.push({
            nome: nome,
            matricula: matricula,
            turma: turma,
            curso: curso,
            historicoFrequencia: [] // Array para guardar as presenças/faltas deste aluno
        });

        nE += 1;
        r = await rl.question('deseja cadastrar outro estudante? (s/n) ');
    }

    // 2. Registro de Presenças e Faltas
    console.log('\n--- REGISTRO DE FREQUÊNCIA ---');
    let mBusca = await rl.question('Digite a matricula do estudante para lançar frequencia: ');
    
    let estudanteEncontrado = estudantes.find(element => element.matricula === mBusca);

    if (estudanteEncontrado) {
        let data = await rl.question('Digite a data (ex: 10/11): ');
        // p = presença, fj = falta justificada, fnj = falta não justificada
        let status = await rl.question('Digite o status (p / fj / fnj): ');

        estudanteEncontrado.historicoFrequencia.push({
            data: data,
            status: status
        });
        console.log('Frequência registrada com sucesso!');

        // 3. Identificar mais de 3 faltas consecutivas sem justificativa (fnj)
        let faltasSeguidas = 0;
        let alertaPedagogico = false;

        // Varre o histórico do fim para o começo para ver as últimas marcações
        for (let i = estudanteEncontrado.historicoFrequencia.length - 1; i >= 0; i--) {
            if (estudanteEncontrado.historicoFrequencia[i].status === "fnj") {
                faltasSeguidas += 1;
                if (faltasSeguidas > 3) {
                    alertaPedagogico = true;
                }
            } else {
                break; // Se achou presença ou falta justificada, quebra a sequência de consecutivas
            }
        }

        // 4. Apresentar alertas visuais no console
        if (alertaPedagogico == true) {
            console.log(`\n⚠️ [ALERTA PEDAGÓGICO] O(A) estudante ${estidanteEncontrado.nome} possui mais de 3 faltas consecutivas não justificadas!`);
        }

    } else {
        console.log('Estudante não encontrado.');
    }

    // 5. Relatório com histórico de frequência
    console.log('\n--- RELATÓRIO DE FREQUÊNCIA ---');
    estudantes.forEach(element => {
        console.log(`\nEstudante: ${element.nome} | Matrícula: ${element.matricula}`);
        console.log('Histórico:');
        element.historicoFrequencia.forEach(freq => {
            console.log(`  Data: ${freq.data} -> Status: ${freq.status.toUpperCase()}`);
        });
    });
}

await gerenciarFrequencia();
 */

/* questao 8 */

/* Questão 8 — Sistema de Gerenciamento de Tarefas */
/* let nT = 0;
let tarefas = [];

async function gerenciarTarefas() {
    let r = "s";

    // 1. Cadastrar Tarefas
    console.log('--- CADASTRO DE TAREFAS ---');
    while (r == "s") {
        let titulo = await rl.question('titulo da tarefa: ');
        let descricao = await rl.question('descrição: ');
        let prioridade = await rl.question('prioridade (Alta/Media/Baixa): ');
        let prazo = await rl.question('prazo (ex: 20/11): ');

        tarefas.push({
            titulo: titulo,
            descricao: descricao,
            prioridade: prioridade,
            prazo: prazo,
            concluida: false // Toda tarefa cadastrada começa como pendente
        });

        nT += 1;
        r = await rl.question('deseja cadastrar outra tarefa? (s/n) ');
    }

    // Função interna para mostrar listagem, filtros e indicadores
    function mostrarPainelTarefas() {
        console.log('\n=============================================');
        console.log('             PAINEL DE TAREFAS               ');
        console.log('=============================================');

        // Indicadores (Totais, Concluídas e Pendentes)
        let totais = tarefas.length;
        let concluidas = tarefas.filter(element => element.concluida === true).length;
        let pendentes = tarefas.filter(element => element.concluida === false).length;

        console.log(`Indicadores -> Totais: ${totais} | Concluídas: ${concluidas} | Pendentes: ${pendentes}`);
        console.log('---------------------------------------------');

        // Ordenando as tarefas por prioridade (Alta primeiro)
        let tarefasOrdenadas = [...tarefas].sort((a, b) => {
            if (a.prioridade === "Alta" && b.prioridade !== "Alta") return -1;
            if (a.prioridade !== "Alta" && b.prioridade === "Alta") return 1;
            return 0;
        });

        // Listagem geral com forEach
        tarefasOrdenadas.forEach(element => {
            console.log(`[${element.concluida ? 'CONCLUÍDA' : 'PENDENTE'}] ${element.titulo} | Prioridade: ${element.prioridade} | Prazo: ${element.prazo}`);
        });
        console.log('=============================================\n');
    }

    // Exibe o painel inicial
    mostrarPainelTarefas();

    // 2. Marcar tarefa como concluída / Editar
    console.log('--- ALTERAR STATUS DA TAREFA ---');
    let tBusca = await rl.question('Digite o titulo da tarefa que deseja concluir: ');
    
    let tarefaEncontrada = tarefas.find(element => element.titulo.toLowerCase() === tBusca.toLowerCase());

    if (tarefaEncontrada) {
        tarefaEncontrada.concluida = true;
        console.log(`>>> A tarefa "${tarefaEncontrada.titulo}" foi concluída com sucesso! <<<`);
    } else {
        console.log('Tarefa não encontrada.');
    }

    // 3. Excluir uma tarefa
    console.log('\n--- EXCLUIR TAREFA ---');
    let tExcluir = await rl.question('Digite o titulo da tarefa que deseja excluir (ou deixe vazio): ');
    
    if (tExcluir !== "") {
        let indice = tarefas.findIndex(element => element.titulo.toLowerCase() === tExcluir.toLowerCase());
        if (indice !== -1) {
            tarefas.splice(indice, 1);
            console.log('>>> Tarefa excluída com sucesso! <<<');
        } else {
            console.log('Tarefa não encontrada para exclusão.');
        }
    }

    // Exibe a listagem final atualizada
    mostrarPainelTarefas();
}

await gerenciarTarefas(); */

/* questao 9 */

/*
let nE = 0;
let estudantes = [];

async function dashboardEscolar() {
    let r = "s";

    // 1. Cadastro de Estudantes com Notas e Turma
    console.log('--- CADASTRO DE INDICADORES ---');
    while (r == "s") {
        let nome = await rl.question('nome do aluno: ');
        let turma = await rl.question('turma (ex: A, B): ');
        let curso = await rl.question('curso: ');
        
        let n1 = parseFloat(await rl.question('nota 1: '));
        let n2 = parseFloat(await rl.question('nota 2: '));
        let faltas = parseInt(await rl.question('total de faltas no ano: '));
        let totalAulas = parseInt(await rl.question('total de aulas dadas: '));

        estudantes.push({
            nome: nome,
            turma: turma,
            curso: curso,
            notas: [n1, n2],
            faltas: faltas,
            totalAulas: totalAulas
        });

        nE += 1;
        r = await rl.question('deseja cadastrar outro estudante? (s/n) ');
    }

    // 2. Filtro por Turma para o Dashboard
    console.log('\n--- GERAR DASHBOARD ---');
    let tFiltro = await rl.question('Digite a turma que deseja analisar (ou deixe vazio para todas): ');

    // Filtra se o usuário digitou uma turma específica, senão pega todos
    let estudantesFiltrados = estudantes;
    if (tFiltro !== "") {
        estudantesFiltrados = estudantes.filter(element => element.turma.toLowerCase() === tFiltro.toLowerCase());
    }

    if (estudantesFiltrados.length === 0) {
        console.log('Nenhum estudante encontrado para esta turma.');
        rl.close();
        return;
    }

    // 3. Cálculos Estatísticos (Média Geral, Frequência e Percentuais com reduce)
    let totalEstudantes = estudantesFiltrados.length;
    let somaMediasGerais = 0;
    
    let aprovados = 0;
    let recuperacao = 0;
    let reprovados = 0;

    estudantesFiltrados.forEach(element => {
        // Usando o reduce para somar as notas do aluno e fazer a média dele
        let somaNotas = element.notas.reduce((acumulador, nota) => acumulador + nota, 0);
        let mediaAluno = somaNotas / element.notas.length;
        somaMediasGerais += mediaAluno;

        // Regra para classificação acadêmica
        if (mediaAluno >= 7) {
            aprovados += 1;
        } else if (mediaAluno >= 5) {
            recuperacao += 1;
        } else {
            reprovados += 1;
        }
    });

    // Média Geral da Turma
    let mediaGeralTurma = somaMediasGerais / totalEstudantes;

    // Percentuais para o gráfico
    let pAprovados = Math.round((aprovados / totalEstudantes) * 100);
    let pRecuperacao = Math.round((recuperacao / totalEstudantes) * 100);
    let pReprovados = Math.round((reprovados / totalEstudantes) * 100);

    // 4. Renderização do Painel com Gráficos em Texto (HTML/CSS simulado no console)
    console.log('\n==================================================');
    console.log(`         DASHBOARD DE INDICADORES (TURMA: ${tFiltro === "" ? "TODAS" : tFiltro.toUpperCase()})`);
    console.log('==================================================');
    console.log(`Média Geral Acadêmica: ${mediaGeralTurma.toFixed(2)}`);
    console.log(`Total de Alunos Analisados: ${totalEstudantes}`);
    console.log('--------------------------------------------------');
    console.log('GRÁFICO DE RENDIMENTO ESCOLAR:');
    console.log('--------------------------------------------------');
    
    // Cada caractere '#' representa 5% para construir as barras do gráfico na tela
    console.log(`Aprovados:    [${'#'.repeat(pAprovados / 5)}${'-'.repeat(20 - (pAprovados / 5))}] ${pAprovados}%`);
    console.log(`Recuperação:  [${'#'.repeat(pRecuperacao / 5)}${'-'.repeat(20 - (pRecuperacao / 5))}] ${pRecuperacao}%`);
    console.log(`Reprovados:   [${'#'.repeat(pReprovados / 5)}${'-'.repeat(20 - (pReprovados / 5))}] ${pReprovados}%`);
    console.log('==================================================\n');
}

await dashboardEscolar();
*/ 


/* questao 10 */

/* const rl = readline.createInterface({ input, output });

let bancoDados = { estudantes: [], tarefas: [] };
if (fs.existsSync('banco_dados.json')) {
    bancoDados = JSON.parse(fs.readFileSync('banco_dados.json', 'utf8'));
}

function salvarLocalStorage() {
    fs.writeFileSync('banco_dados.json', JSON.stringify(bancoDados, null, 2));
}

async function menuEstudantes() {
    console.log('\n--- GERENCIAR ESTUDANTES ---');
    console.log('1 - Cadastrar Novo Aluno');
    console.log('2 - Listar, Editar ou Excluir');
    console.log('3 - Lançar Notas de Avaliações');
    let op = await rl.question('Escolha uma opção: ');

    if (op === "1") {
        let nome = await rl.question('Nome do aluno: ');
        let matricula = await rl.question('Matrícula: ');
        let turma = await rl.question('Turma: ');
        let curso = await rl.question('Curso: ');

        bancoDados.estudantes.push({
            nome: nome,
            matricula: matricula,
            turma: turma,
            curso: curso,
            notas: [],
            frequencia: []
        });
        salvarLocalStorage();
        console.log('>>> Aluno cadastrado com sucesso! <<<');

    } else if (op === "2") {
        console.log('\n--- LISTAGEM GERAL ---');
        bancoDados.estudantes.forEach(element => {
            let soma = element.notas.reduce((acc, n) => acc + n, 0);
            let media = element.notas.length > 0 ? (soma / element.notas.length).toFixed(2) : "Sem Notas";
            console.log(`[Matrícula: ${element.matricula}] Nome: ${element.nome} | Turma: ${element.turma} | Média: ${media}`);
        });

        let acao = await rl.question('\nDeseja (e)ditar, (x)cluir ou (s)air? ');
        if (acao === "e" || acao === "x") {
            let mat = await rl.question('Digite a matrícula do estudante: ');
            let index = bancoDados.estudantes.findIndex(element => element.matricula === mat);

            if (index !== -1) {
                if (acao === "e") {
                    bancoDados.estudantes[index].nome = await rl.question('Novo Nome: ');
                    bancoDados.estudantes[index].turma = await rl.question('Nova Turma: ');
                    console.log('>>> Dados updated! <<<');
                } else {
                    bancoDados.estudantes.splice(index, 1);
                    console.log('>>> Aluno removido do sistema! <<<');
                }
                salvarLocalStorage();
            } else {
                console.log('Estudante não encontrado.');
            }
        }
    } else if (op === "3") {
        let mat = await rl.question('Matrícula do aluno: ');
        let estudante = bancoDados.estudantes.find(element => element.matricula === mat);
        if (estudante) {
            let nota = parseFloat(await rl.question('Digite a nota do aluno: '));
            estudante.notas.push(nota);
            salvarLocalStorage();
            console.log('>>> Nota lançada e média recalculada! <<<');
        } else {
            console.log('Estudante não encontrado.');
        }
    }
}

async function menuFrequencia() {
    console.log('\n--- MONITORAMENTO DE FREQUÊNCIA ---');
    let mat = await rl.question('Matrícula do aluno: ');
    let estudante = bancoDados.estudantes.find(element => element.matricula === mat);

    if (!estudante) {
        console.log('Estudante não cadastrado.');
        return;
    }

    let data = await rl.question('Data (DD/MM): ');
    let status = await rl.question('Status (p - Presença / fj - Justificada / fnj - Não Justificada): ');

    estudante.frequencia.push({ data: data, status: status });
    salvarLocalStorage();
    console.log('>>> Frequência registrada! <<<');

    let consecutivas = 0;
    let pedagogico = false;
    for (let i = estudante.frequencia.length - 1; i >= 0; i--) {
        if (estudante.frequencia[i].status === 'fnj') {
            consecutivas++;
            if (consecutivas > 3) { pedagogico = true; break; }
        } else {
            break;
        }
    }
    if (pedagogico) {
        console.log(`\n⚠️ [ALERTA PEDAGÓGICO] O estudante ${estudante.nome} exige acompanhamento por faltas consecutivas!`);
    }
}

async function menuTarefas() {
    console.log('\n--- GERENCIADOR DE TAREFAS DA EQUIPE ---');
    console.log('1 - Adicionar Tarefa');
    console.log('2 - Alterar Status (Concluir)');
    console.log('3 - Ver Painel Completo');
    let op = await rl.question('Opção: ');

    if (op === "1") {
        let tit = await rl.question('Título: ');
        let prioridade = await rl.question('Prioridade (Alta/Media/Baixa): ');
        let prazo = await rl.question('Prazo: ');
        bancoDados.tarefas.push({ titulo: tit, prioridade: prioridade, prazo: prazo, concluida: false });
        salvarLocalStorage();
        console.log('>>> Tarefa salva! <<<');
    } else if (op === "2") {
        let tit = await rl.question('Título da tarefa para concluir: ');
        let t = bancoDados.tarefas.find(element => element.titulo.toLowerCase() === tit.toLowerCase());
        if (t) {
            t.concluida = true;
            salvarLocalStorage();
            console.log('>>> Tarefa concluída! <<<');
        }
    } else if (op === "3") {
        console.log(`\nTarefas Totais: ${bancoDados.tarefas.length}`);
        bancoDados.tarefas.forEach(element => {
            console.log(`[${element.concluida ? 'OK' : 'PENDENTE'}] ${element.titulo} - Prazo: ${element.prazo} - Prioridade: ${element.prioridade}`);
        });
    }
}

function exibirDashboard() {
    console.log('\n==================================================');
    console.log('             DASHBOARD DE INDICADORES             ');
    console.log('==================================================');

    if (bancoDados.estudantes.length === 0) {
        console.log('Cadastre estudantes para gerar indicators.');
        return;
    }

    let aprovados = 0; let recuperacao = 0; let reprovados = 0;
    let total = bancoDados.estudantes.length;

    bancoDados.estudantes.forEach(element => {
        let soma = element.notas.reduce((acc, n) => acc + n, 0);
        let media = element.notas.length > 0 ? soma / element.notas.length : 0;

        if (media >= 7) aprovados++;
        else if (media >= 5) recuperacao++;
        else reprovados++;
    });

    let pAprovados = Math.round((aprovados / total) * 100);
    let pRec = Math.round((recuperacao / total) * 100);
    let pRep = Math.round((reprovados / total) * 100);

    console.log('GRÁFICO DE RENDIMENTO ESCOLAR AUTOMÁTICO:');
    console.log(`Aprovados:    [${'#'.repeat(pAprovados / 5)}${'-'.repeat(20 - (pAprovados / 5))}] ${pAprovados}%`);
    console.log(`Recuperação:  [${'#'.repeat(pRec / 5)}${'-'.repeat(20 - (pRec / 5))}] ${pRec}%`);
    console.log(`Reprovados:   [${'#'.repeat(pRep / 5)}${'-'.repeat(20 - (pRep / 5))}] ${pRep}%`);
    console.log('==================================================\n');
}

function imprimirRelatorioFormatado() {
    console.log('\n================================================================');
    console.log('                 RELATÓRIO ESCOLAR OFICIAL                      ');
    console.log('================================================================');
    bancoDados.estudantes.forEach(element => {
        let soma = element.notas.reduce((acc, n) => acc + n, 0);
        let media = element.notas.length > 0 ? (soma / element.notas.length).toFixed(2) : "0.00";
        let totalFaltas = element.frequencia.filter(f => f.status === 'fnj').length;
        
        console.log(`Estudante: ${element.nome.padEnd(20)} | Média: ${media} | Faltas (FNJ): ${totalFaltas}`);
    });
    console.log('================================================================\n');
}

async function sistemaPrincipal() {
    let rodando = true;
    while (rodando) {
        console.log('======= MENU INTEGRADO DE GESTÃO ESCOLAR =======');
        console.log('1 - Gerenciar Estudantes e Notas');
        console.log('2 - Monitorar Frequências e Alertas');
        console.log('3 - Painel de Tarefas da Equipe');
        console.log('4 - Ver Dashboard Geral (Gráficos)');
        console.log('5 - Gerar Relatório de Impressão');
        console.log('0 - Sair do Sistema');
        console.log('================================================');
        let opGeral = await rl.question('Selecione uma opção: ');

        if (opGeral === "1") await menuEstudantes();
        else if (opGeral === "2") await menuFrequencia();
        else if (opGeral === "3") await menuTarefas();
        else if (opGeral === "4") exibirDashboard();
        else if (opGeral === "5") imprimirRelatorioFormatado();
        else if (opGeral === "0") { console.log('Fechando sistema...'); rodando = false; }
        else console.log('Opção inválida!');
    }
}

await sistemaPrincipal(); */
rl.close();