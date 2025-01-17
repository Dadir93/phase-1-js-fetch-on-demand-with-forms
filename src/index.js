const init = () => {
    const inputForm = document.querySelector('#searchForm');
  
    inputForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const input = document.querySelector('#searchByID');
  
      fetch(`http://localhost:3000/movies/${input.value}`)
        .then(response => {
          if (!response.ok) {
            throw new Error('Movie not found');
          }
          return response.json();
        })
        .then(data => {
          const title = document.querySelector('#movieDetails h4');
          const summary = document.querySelector('#movieDetails p');
  
          title.innerText = data.title;
          summary.innerText = data.summary;
        })
        .catch(error => {
          const title = document.querySelector('#movieDetails h4');
          const summary = document.querySelector('#movieDetails p');
  
          title.innerText = 'Movie not found';
          summary.innerText = '';
          console.error(error);
        });
    });
  };
  
  document.addEventListener('DOMContentLoaded', init);
  