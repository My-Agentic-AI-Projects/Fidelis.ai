<?php
header('Content-Type: application/json');

$mongoUrl = getenv('MONGO_URL');
$dbName = getenv('DB_NAME');

$client = new MongoDB\Client($mongoUrl);
$db = $client->selectDatabase($dbName);

$requestUri = $_SERVER['REQUEST_URI'];
$method = $_SERVER['REQUEST_METHOD'];

if ($requestUri === '/api' || $requestUri === '/api/') {
    echo json_encode(['message' => 'Hello World']);
    exit;
}

if ($requestUri === '/api/status' && $method === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);
    $status = [
        'id' => uniqid('', true),
        'client_name' => $data['client_name'] ?? '',
        'timestamp' => new MongoDB\BSON\UTCDateTime()
    ];
    $db->selectCollection('status_checks')->insertOne($status);
    // Convert MongoDB BSON date to ISO string for output
    $status['timestamp'] = $status['timestamp']->toDateTime()->format(DateTime::ATOM);
    echo json_encode($status);
    exit;
}

if ($requestUri === '/api/status' && $method === 'GET') {
    $cursor = $db->selectCollection('status_checks')->find();
    $statusChecks = [];
    foreach ($cursor as $doc) {
        $doc['timestamp'] = $doc['timestamp']->toDateTime()->format(DateTime::ATOM);
        $statusChecks[] = $doc;
    }
    echo json_encode($statusChecks);
    exit;
}

http_response_code(404);
echo json_encode(['detail' => 'Not Found']);
