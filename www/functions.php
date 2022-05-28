<?php

class Translator {

    function getTranslate($url) {

        $json = __DIR__ . '/lang/' . $url . '.json';
        $parsedJson = file_get_contents($json);

        if ($parsedJson === '') {
            header("Location: /");
            exit();
        }

        $data = json_decode($parsedJson, FALSE);

        return $data;
    }
}