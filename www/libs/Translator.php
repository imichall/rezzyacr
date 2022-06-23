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

    /**
     * @var boolean
     */
    private $editMode = false;

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
            $content =  '{{ ' . $term . ' }}';
        }

        if ($this->editMode) {
            $content = '<span contenteditable="true" class="InlineEditation" data-file="'.$term.'" data-lang="'.$this->lang.'">' . $content . '</span>';
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

        if (!is_dir($term)) {
            mkdir($this->translationPath . $term, 0777, true);
        }

        return null;
    }


    /**
     * @param boolean $state
     * @return void
     */
    public function setEditMode($state = false)
    {
        $this->editMode = $state;
    }


    public function canEdit()
    {
        return $this->editMode;
    }
}