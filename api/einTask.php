<?php

session_start();
$_SESSION['task'] [] =
    [
        "ID" => count($_SESSION ["task"]),
        "Caption" => $_REQUEST["caption"],
        "STATUS" => "open"
    ];

// sende passende Header Einträge
header('Content-Type: text/html; charset=utf-8');
header('Content-Type: application/json');

echo json_encode($_SESSION['task'], JSON_UNESCAPED_UNICODE);


