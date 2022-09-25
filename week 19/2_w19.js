const form = document.querySelector('.form');
// const btn = document.querySelector('.button');

function getData(event) {
    event.preventDefault();
    const nickname = form.querySelector('#nickname');
    const age = form.querySelector('#age');
    const name = form.querySelector('#name');
    const phone = form.querySelector('#phone');
    const email = form.querySelector('#email');
    const breed = form.querySelector('#breed');
    const ownBreed = form.querySelector('#own-breed');
    const feed = form.querySelector('input[type="checkbox"]:checked');
    const gender = form.querySelector('input[type="radio"]:checked');
    const comment = form.querySelector('#comment');
    const photo = form.querySelector('input[name="photo"]');

    
    class Cat {
        constructor(option) {
            this.nickname = option.nickname;
            this.age = option.age;
            this.name = option.name;
            this.phone = option.phone;
            this.email = option.email;
            this.breed = option.breed;
            this.ownBreed = option.ownBreed;
            this.feed = option.feed;
            this.gender = option.gender;
            this.comment = option.comment;
            this.photo = option.photo;
        }
    }

    let cat = new Cat({
        nickname: nickname.value,
        age: age.value,
        name: name.value,
        phone: phone.value,
        email: email.value,
        breed: breed.value,
        ownBreed: ownBreed.value,
        feed: feed.value,
        gender: gender.value,
        comment: comment.value,
        photo: photo.value,
    });

    console.log(cat);
}

form.addEventListener('submit', getData);