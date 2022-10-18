document.addEventListener('DOMContentLoaded', () => {
    const searchBtn = document.querySelector('.btn');
    const searchInput = document.querySelector('#search-gif');

    searchInput.addEventListener('keyup', (event) => {
        if (event.key === 'Enter') {
            searchGifs();
        }
    })


    async function searchGifs() {
        const giffsWrapper = document.querySelector('.giffs');
        let showGIF = document.querySelector('#search-gif').value;

        await fetch("http://api.giphy.com/v1/gifs/search?q=" + showGIF + "&api_key=p27NADkLsjudbKy4WtQiKvD8GwjI5D7h&limit=5")
            .then(response => response.json())
            .then(response => {
                const giffs = response.data;
                giffsWrapper.innerHTML = "";
                for (i in giffs) {
                    giffsWrapper.innerHTML += `
                    <div class="item">
                        <img src=${giffs[i].images.original.url} alt="${giffs[i].title}">
                    </div>`;
                }
            })
            .catch(err => console.log(err))
    };

    searchBtn.addEventListener('click', searchGifs);

})