<?php
include 'db_connect.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $task = $_POST['task'];
    $sql = "INSERT INTO tasks (task_name) VALUES ('$task')";
    
    if ($conn->query($sql) === TRUE) {
        echo json_encode(['status' => 'success', 'message' => 'Task added']);
    } else {
        echo json_encode(['status' => 'error', 'message' => $conn->error]);
    }
}
?>
