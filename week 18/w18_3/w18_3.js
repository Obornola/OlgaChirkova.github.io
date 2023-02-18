document.addEventListener('DOMContentLoaded', () => {
    const showComments = document.querySelector('.comments');
    const textArea = document.querySelector('.textarea');
    const button = document.querySelector('.btn');

    let arrComments = [];

    function showCommentHTML() {
        showComments.innerHTML = "";
        html = "";
        arrComments.forEach((comm, index) => {
            html += `
            <div class='comment-add' id = 'action-${index}'>
                ${comm}
                <hr>
            </div>
        `;
        });
        showComments.innerHTML += html;
    }

    function checkSpam() {
        let text = textArea.value;
        textArea.value = "";

        const spamWords = ['viagra', 'XXX'];
        for (let word of spamWords) {
            let regexp = new RegExp(word, 'ig');
            filteredText = text.replace(regexp, '*****');
        };

        arrComments.push(filteredText);
        showComments.innerHTML = "";

        showCommentHTML();

    }

    button.addEventListener('click', checkSpam);





















});