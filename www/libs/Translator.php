<?php
namespace Model;

class Translator
{
    /**
     * @var string
     */
    private $lang;

    /**
     * @var string
     */
    private $translationPath;

    public function __construct($lang, $translationPath = './translations')
    {
        $this->lang = $lang;
        $this->translationPath = $translationPath . '/' . $this->lang . '/';
    }

    /**
     * @param string $term
     * @return string
     */
    public function translate($term)
    {
        $content = $this->loadFile($term);
        if (!$content) {
            return '{{ ' . $term . ' }}';
        }
        return $content;
    }

    // alias
    public function _($term)
    {
        return $this->translate($term);
    }

    /**
     * @param mixed $term
     * @return string|null
     */
    private function loadFile($term)
    {
        $term = str_replace('.', '/', $term);
        if (is_file($file = $this->translationPath . $term . '.php')) {
            ob_start();
            include $file;
            $buffer = ob_get_clean();
            return $buffer;
        }

        return null;
    }
}