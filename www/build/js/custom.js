const inlineEditationElems = document.querySelectorAll('.InlineEditation');
        const debug = document.getElementById('Toaster');

        inlineEditationElems.forEach(elem => {
            elem.onblur = () => {

                postData('saveTranslation.php', {
                    lang: elem.getAttribute('data-lang'),
                    file: elem.getAttribute('data-file'),
                    content: elem.innerHTML
                }).then(data => {
                    debug.classList.add('-Show');
                    debug.innerHTML = `Stav: ${data.state}<br />
                    Překlad:  ${data.file}`;

                    setTimeout(() => {
                        debug.classList.remove('-Show');
                    }, 3000);
                })

            }
        })

        async function postData(url = '', data = {}) {
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });
            return response.json();
        }