const generateList = (array) => {
    const ul = document.createElement('ul');
  
    for (let i = 0; i < array.length; i++) {
      const item = document.createElement('li');
  
      if (Array.isArray(array[i])) {
        // Якщо елемент масиву є масивом, генеруємо вкладений список
        item.appendChild(generateList(array[i]));
      } else {
        item.textContent = array[i];
      }
  
      ul.appendChild(item);
    }
  
    return ul;
  }
  
  const array = [1, 2, [1.1, 1.2, 1.3], 3];
  const array2 = [1, 2, 3, [1.1, 1.2, 1.3], 4, 5, [1.1, 1.2, 1.3]];
  const list = generateList(array2);

  const result = document.getElementById('list-container');
  result.appendChild(list);