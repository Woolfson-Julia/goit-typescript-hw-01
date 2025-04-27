import axios from 'axios';

async function fetchData<T>(url:string):Promise<T>{
  try {
    const response = await axios.get<T>(url);
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching from ${url}: ${error}`);
  }
}

fetchData<unknown>('https://67f69eee42d6c71cca62c242.mockapi.io/contacts')
  .then(data => {
    if (typeof data === 'object' && data !== null) {
      console.dir(data);
    } else {
      console.error('Неправильный формат данных');
    }
  })
  .catch(error => {
    console.error('Ошибка:', error);
  });