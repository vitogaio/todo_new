<?php
session_start();

// sende passende Header Einträge
header('Content-Type: text/html; charset=utf-8');
header('Content-Type: application/json');

echo json_encode($_SESSION["task"], JSON_UNESCAPED_UNICODE);

