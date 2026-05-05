<?php
    $conexao->select_db($nomeDoBanco)
        or exit("Erro ao abrir banco: " . $conexao->error);