<?php
    $conexao = new mysqli($servidor, $usuario, $senha)
        or exit("Erro ao conectar: " . mysqli_connect_error());