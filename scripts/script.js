const apiUrl = 'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/id';

// Chamar a função para cada herói na sequencia do html
getHeroData('346'); // ID do herói
getHeroData('332'); 
getHeroData('107');
getHeroData('659');
getHeroData('149');
getHeroData('620');
getHeroData('720');
getHeroData('644');
getHeroData('70');
getHeroData('38');
getHeroData('265');
getHeroData('194');

// Chamar a função para cada herói
function getHeroData(heroId) {
   fetch(`${apiUrl}/${heroId}.json`)
      .then(response => response.json())
      .then(data => {
         const heroElement = document.querySelector(`.hero[data-hero-id="${heroId}"]`);
         const heroNameElement = heroElement.querySelector('.hero-name');
         const fullNameElement = heroElement.querySelector('.full-name');
         const nicknameElement = heroElement.querySelector('.nickname');
         const occupationElement = heroElement.querySelector('.occupation');

         // Extrair os dados da resposta da API
         const heroName = data.name;
         const fullName = data.biography['fullName'];
         const nickname = data.biography['aliases'][0];
         const occupation = data.work.occupation;

         // Atualizar os elementos HTML com os dados extraídos
         heroNameElement.textContent = heroName;
         fullNameElement.textContent = fullName;
         nicknameElement.textContent = nickname;
         occupationElement.textContent = occupation;

      })
      .catch(error => console.log(error));
}