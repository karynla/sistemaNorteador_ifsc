<?php
    $sql = "CREATE TABLE IF NOT EXISTS $tabelaVeiculo (
        id     INT AUTO_INCREMENT PRIMARY KEY,
        marca  VARCHAR(300),
        modelo VARCHAR(300),
        placa  VARCHAR(10)
    ) ENGINE=innoDB";

    $conexao->query($sql) or exit("Erro ao criar tabela veículo: " . $conexao->error);