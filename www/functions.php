<?php

class Translator {

    public $lang;

    function getTranslate($lang) {

        $this->lang = $lang;
        $json = __DIR__ . '/lang/' . $this->lang . '.json';
        $parsedJson = file_get_contents($json);

        if ($parsedJson === '') {
            header("Location: /");
            exit();
        }

        $data = json_decode($parsedJson, FALSE);

        return $data;
    }
}