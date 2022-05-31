<?php

try {
    $rawdata = file_get_contents("php://input");
    $data = json_decode($rawdata);

    $path = './translations/' . $data->lang . '/';
    $file = $data->file;
    $content = $data->content;

    $file = str_replace('.', '/', $file);    $fullfile = $path . $file . '.php';
    file_put_contents($fullfile, $content);

    $result = json_encode([
        'state' => 'OK',
        'file' => $file
    ]);

} catch (\Exception $e) {
    $result = json_encode([
        'state' => 'NOK',
        'file' => $file,
        'error' => $e->getMessage()
    ]);
}


print_r($result);
exit(0);