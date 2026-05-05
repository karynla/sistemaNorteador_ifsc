<?php
    $sql = "CREATE DATABASE IF NOT EXISTS $nomeDoBanco";
    $conexao->query($sql) or exit("Erro ao criar banco: " . $conexao->error);