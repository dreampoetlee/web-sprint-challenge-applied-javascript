import axios from 'axios';

const Tabs = (topics) => {
  // Create Element
  const main = document.createElement('div');
  main.classList.add('topics')
  topics.forEach(item => {
    const elt = document.createElement('div');
    elt.classList.add('tab');
    elt.textContent = item;
    main.appendChild(elt);
  })
  return main
}

const tabsAppender = (selector) => {
  // Get the Topics
  const main = document.querySelector(selector);
  axios
    .get('https://lambda-times-api.herokuapp.com/topics')
    .then(item => {
      console.log(`data: ${item.data.topics}`)
      main.appendChild(Tabs(item.data.topics))
    })
    .catch(err => console.log(err))
}

export {Tabs, tabsAppender}