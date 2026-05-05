<?php
    $sql = "CREATE TABLE IF NOT EXISTS $tabelaCliente (
        id        INT AUTO_INCREMENT PRIMARY KEY,
        nome      VARCHAR(300),
        endereco  VARCHAR(300),
        email     VARCHAR(300),
        usuario   VARCHAR(300),
        senha     VARCHAR(300),
        celular   VARCHAR(20)
    ) ENGINE=innoDB";

    $conexao->query($sql) or exit("Erro ao criar tabela cliente: " . $conexao->error);