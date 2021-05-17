const Header = (title, date, temp) => {
  const header = document.createElement('div');
  const date1 = document.createElement('span');
  const title1 = document.createElement('h1');
  const temp1 = document.createElement('span');

  // Add style and classes
  header.classList.add('header');
  date1.classList.add('date');
  temp1.classList.add('temp');

  // Add textContent
  date1.textContent = date;
  title1.textContent = title;
  temp1.textContent = temp;

  // Create Structure
  header.appendChild(date1);
  header.appendChild(title1);
  header.appendChild(temp1);

  return header
}

const headerAppender = (selctor) => {
  const header = Header('News for Today!', '16 May 21', 'temp?');
  document.querySelector(selctor).appendChild(header);
}

export {Header, headerAppender} 