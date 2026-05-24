<?php
// check.php
header('Content-Type: application/json');

$subdomain = isset($_GET['subdomain']) ? preg_replace('/[^a-z0-9-]/', '', strtolower($_GET['subdomain'])) : '';

if (strlen($subdomain) < 3) {
    echo json_encode(['available' => false, 'error' => 'Too short']);
    exit;
}

// Check your control panel (e.g., CyberPanel/cPanel API) or system database to see if directory/subdomain exists
$directoryPath = "/home/yourbrand/public_html/users/" . $subdomain;

if (is_dir($directoryPath)) {
    echo json_encode(['available' => false]);
} else {
    echo json_encode(['available' => true]);
}
?>
