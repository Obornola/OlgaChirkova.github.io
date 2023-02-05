document.addEventListener('DOMContentLoaded', () => {
    const comments = document.querySelector('.comments');
    const textInput = document.querySelector('.textarea');
    const button = document.querySelector('.btn');

    let arrComm = [];

    function showCommentHTML() {
        comments.innerHTML = "";
        html = "";
        arrComm.forEach((comm, index) => {
            html += `
            <div class='comment-add' id = 'action-${index}'>
                ${comm}
                <hr>
            </div>
        `;
        });
        comments.innerHTML += html;
    }

    function checkSpam() {
        let text = textInput.value;
        textInput.value = "";

        const spamWords = ['viagra', 'XXX'];
        for (let word of spamWords) {
            let regexp = new RegExp(word, 'ig');
            filteredText = text.replace(regexp, '*****');
        };

        arrComm.push(filteredText);
        comments.innerHTML = "";

        showCommentHTML();

    }

    button.addEventListener('click', checkSpam);





















});