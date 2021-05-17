import axios from "axios";

const Card = ({headline, authorPhoto, authorName}) => {
  const card = document.createElement('div');
  const head = document.createElement('div');
  const author = document.createElement('div');
  const imgCont = document.createElement('div')
  const image = document.createElement('img');
  const name = document.createElement('span');

  card.classList.add('card');
  head.classList.add('headline');
  author.classList.add('author');
  imgCont.classList.add('img-container');

  head.textContent = headline;
  image.src = authorPhoto;
  name.textContent = authorName;

  card.appendChild(head);
  card.appendChild(author);
  author.appendChild(imgCont);
  imgCont.appendChild(image);
  author.appendChild(name);

  card.addEventListener('click', () => console.log(headline));

  return card
}

const cardAppender = (selector) => {
  const main = document.querySelector(selector)
  axios
    .get('https://lambda-times-api.herokuapp.com/articles')
    .then(item => {
      const articles = item.data.articles;
      for(const art in articles) {
        console.log(articles[art]);
        articles[art].forEach(y => main.appendChild(Card(y)))
      }
    })
    .catch(err => console.log(err))
}

export {Card, cardAppender}

