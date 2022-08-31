var table = document.getElementById("table");
var qtdAluno = table.getElementsByTagName('tr');
var pegarNota = document.getElementById("cabeça");
var x = 3;
var qtdNota = 4;

aluno = 4;

function tabela(){
    let antigo;
    for(i = 1; i < 4; i++){
        antigo = document.getElementById('table').innerHTML
        document.getElementById("table").innerHTML = antigo + `
        <tr>
        <th>${i}</th>
        <td><input type="text" id="nome${i}"></td>
        <td><input type="number" min="1" max="10" id="nota${i}1"></input></td>
        <td><input type="number" min="1" max="10" id="nota${i}2"></input></td>
        <td><input type="number" min="1" max="10" id="nota${i}3"></input></td>
        <td><input type="number" min="1" max="10" id="nota${i}4"></input></td>
        <td><output id="media${i}"></output></td>
        <td><output id="situacao${i}"></output></td>
      </tr>
        `
    }
}


function calcula(){
    let mediasoma = 0;
    for (aluno = 1; aluno < qtdAluno.length; aluno ++){
        let pegaNota;
        let soma = 0;

        for(nota = 1; nota <= 4; nota++){
        pegaNota = Number(document.getElementById(`nota${aluno}${nota}`).value);
        soma += pegaNota;
        } 

        media = (soma)/4;
        mediasoma = mediasoma + media;

        mediaTotal = mediasoma/(qtdAluno.length - 1);
        document.getElementById(`media${aluno}`).innerText = media;
        document.getElementById("mediaa").value = mediaTotal;
        
        if(media >= 5 ){
            document.getElementById(`situacao${aluno}`).innerText = "aprovado";
            document.getElementById(`situacao${aluno}`).style.backgroundColor = 'blue'
        } else if(media >= 4.5 && media < 5){
            document.getElementById(`situacao${aluno}`).innerText = "recuperação";
            document.getElementById(`situacao${aluno}`).style.backgroundColor = 'yellow'
        } else {
            document.getElementById(`situacao${aluno}`).innerText = "reprovado";
            document.getElementById(`situacao${aluno}`).style.backgroundColor = 'red'
        }
    }
    
}

function adicionar(){
    qtdAluno.length++;
    if (qtdAluno.length <= 10) {
        
        var antigo = document.getElementById("table").innerHTML
        document.getElementById("table").innerHTML = antigo + `
        <tr>
        <th>${qtdAluno.length}</th>
        <td><input type="text" id="nome${qtdAluno.length}"></td>
        <td><input type="number" min="1" max="10" id="nota${qtdAluno.length}1"></input></td>
        <td><input type="number" min="1" max="10" id="nota${qtdAluno.length}2"></input></td>
        <td><input type="number" min="1" max="10" id="nota${qtdAluno.length}3"></input></td>
        <td><input type="number" min="1" max="10" id="nota${qtdAluno.length}4"></input></td>
        <td><output id="media${qtdAluno.length}"></output></td>
        <td><output id="situacao${qtdAluno.length}"></output></td>
      </tr>
        `;
    } else
    alert("Maximo de alunos atingido");
}

function deleta() {
    if(qtdAluno.length > 1){
        let apagar = qtdAluno.length - 1;
        table.deleteRow(apagar);
    }
};