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
                for (i in giffs) {
                    console.log(giffs[i]);
                    giffsWrapper.innerHTML = "";
                    giffsWrapper.innerHTML += `
                    <div class="item">
                        <img src=${giffs[i].url} alt="img">
                    </div>`;
                    console.log(giffs[i].url);
                }
            })
            .catch(err => console.log(err))
    };

    searchBtn.addEventListener('click', searchGifs);

})