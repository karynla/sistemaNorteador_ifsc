<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Cadastro de Cliente - Sistema Norteador</title>
</head>
<body>

<?php
    // Carrega todos os arquivos
    require_once "../php/dados-conexao.inc.php";
    require_once "../php/conectar.inc.php";
    require_once "../php/criar-banco.inc.php";
    require_once "../php/abrir-banco.inc.php";
    require_once "../php/definir-utf8.inc.php";
    require_once "../php/criar-tabela-cliente.inc.php";

    // Recebe os dados que vieram do formulario
    $nome     = $_POST['nome'];
    $endereco = $_POST['endereco'];
    $email    = $_POST['email'];
    $usuario  = $_POST['usuario'];
    $senha    = $_POST['senha'];
    $celular  = $_POST['celular'];

    // Remove espacos desnecessarios no inicio e fim
    $nome     = trim($nome);
    $endereco = trim($endereco);
    $email    = trim($email);
    $usuario  = trim($usuario);
    $senha    = trim($senha);
    $celular  = trim($celular);

    // Protege contra ataques de SQL injection
    $nome     = $conexao->escape_string($nome);
    $endereco = $conexao->escape_string($endereco);
    $email    = $conexao->escape_string($email);
    $usuario  = $conexao->escape_string($usuario);
    $senha    = $conexao->escape_string($senha);
    $celular  = $conexao->escape_string($celular);

    // Monta e executa o insert no banco
    $sql = "INSERT INTO $tabelaCliente 
            (nome, endereco, email, usuario, senha, celular)
            VALUES
            ('$nome', '$endereco', '$email', '$usuario', '$senha', '$celular')";

    $conexao->query($sql) or exit("Erro ao cadastrar cliente: " . $conexao->error);

    // Mostra mensagem de sucesso
    echo "<p>Cliente <strong>$nome</strong> cadastrado com sucesso!</p>";
    echo "<a href='../pages/cadastro-cliente.html'>Voltar ao formulário</a>";

    // Encerra a conexao
    require_once "../php/desconectar.inc.php";
?>

</body>
</html>