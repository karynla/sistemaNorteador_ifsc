<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Cadastro de Veículo - Sistema Norteador</title>
</head>
<body>

<?php
    // Carrega todos os arquivos
    require_once "../php/dados-conexao.inc.php";
    require_once "../php/conectar.inc.php";
    require_once "../php/criar-banco.inc.php";
    require_once "../php/abrir-banco.inc.php";
    require_once "../php/definir-utf8.inc.php";
    require_once "../php/criar-tabela-veiculo.inc.php";

    // Recebe dados que vieram do formulario
    $marca  = $_POST['marca'];
    $modelo = $_POST['modelo'];
    $placa  = $_POST['placa'];

    // Remove espacos desnecessarios no inicio e fim
    $marca  = trim($marca);
    $modelo = trim($modelo);
    $placa  = trim($placa);

    // Protege contra ataques SQL injection
    $marca  = $conexao->escape_string($marca);
    $modelo = $conexao->escape_string($modelo);
    $placa  = $conexao->escape_string($placa);

    // Monta e executa o INSERT no banco
    $sql = "INSERT INTO $tabelaVeiculo
            (marca, modelo, placa)
            VALUES
            ('$marca', '$modelo', '$placa')";

    $conexao->query($sql) or exit("Erro ao cadastrar veículo: " . $conexao->error);

    // Mostra mensagem de sucesso
    echo "<p>Veículo <strong>$marca $modelo</strong> cadastrado com sucesso!</p>";
    echo "<a href='../pages/cadastro-veiculo.html'>← Voltar ao formulário</a>";

    // Encerra a conexao
    require_once "../php/desconectar.inc.php";
?>

</body>
</html>