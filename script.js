const countries = [
    {
        name: "India",
        greeting: "Namaste",
        festival: "Diwali",
        food: "Biryani",
        funFact: "India has over 19,500 spoken languages!"
    },
    {
      name: "Japan",
      greeting: "Konnichiwa",
      festival: "Hanami (Cherry Blossom)",
      food: "Sushi",
      funFact: "There are more pets than children in Japan!"
    },
    {
      name: "Brazil",
      greeting: "Olá",
      festival: "Carnival",
      food: "Feijoada",
      funFact: "Brazilians love football – they’ve won 5 World Cups!"
    },
    {
      name: "France",
      greeting: "Bonjour",
      festival: "Bastille Day",
      food: "Croissant",
      funFact: "The Eiffel Tower can grow taller in summer!"
    },
    {
      name: "Egypt",
      greeting: "Ahlan",
      festival: "Sham El-Nessim",
      food: "Koshari",
      funFact: "Ancient Egyptians invented the 365-day calendar!"
    },
    {
      name: "Mexico",
      greeting: "Hola",
      festival: "Día de los Muertos",
      food: "Tacos",
      funFact: "Mexico introduced chocolate to the world!"
    },
    {
      name: "Italy",
      greeting: "Ciao",
      festival: "Venice Carnival",
      food: "Pizza",
      funFact: "Italy has more UNESCO sites than any other country!"
    },
    {
      name: "South Korea",
      greeting: "Annyeonghaseyo",
      festival: "Chuseok",
      food: "Kimchi",
      funFact: "South Korea has the fastest internet in the world!"
    },
    {
      name: "Russia",
      greeting: "Privet",
      festival: "Maslenitsa",
      food: "Borscht",
      funFact: "Russia spans 11 time zones!"
    },
    {
      name: "Thailand",
      greeting: "Sawasdee",
      festival: "Songkran (Water Festival)",
      food: "Pad Thai",
      funFact: "Thailand is home to the world’s smallest mammal – the bumblebee bat!"
    },
    {
      name: "Australia",
      greeting: "G'day",
      festival: "Australia Day",
      food: "Meat Pie",
      funFact: "Australia has more kangaroos than people!"
    },
    {
      name: "Mexico",
      greeting: "Hola",
      festival: "Dia de los Muertos (Day of the Dead)",
      food: "Tacos",
      funFact: "Mexico introduced chocolate, chilies, and corn to the world!"
    },
    {
        name: "China",
        greeting: "Nǐ hǎo",
        festival: "Chinese New Year",
        food: "Dumplings",
        funFact: "China is home to the world’s largest population!"
      },
      {
        name: "Germany",
        greeting: "Hallo",
        festival: "Oktoberfest",
        food: "Bratwurst",
        funFact: "Germany has over 1,500 different types of sausages!"
      },
      {
        name: "Canada",
        greeting: "Hello / Bonjour",
        festival: "Canada Day",
        food: "Poutine",
        funFact: "Canada has the most lakes of any country in the world!"
      },
      {
        name: "Spain",
        greeting: "Hola",
        festival: "La Tomatina",
        food: "Paella",
        funFact: "Spain produces over 40% of the world’s olive oil!"
      },
      {
        name: "Greece",
        greeting: "Yassou",
        festival: "Easter",
        food: "Moussaka",
        funFact: "Greece is considered the birthplace of democracy!"
      },
      {
        name: "Turkey",
        greeting: "Merhaba",
        festival: "Ramadan Bayram",
        food: "Baklava",
        funFact: "Istanbul is the only city in the world on two continents!"
      },
      {
        name: "Argentina",
        greeting: "Hola",
        festival: "Carnaval",
        food: "Asado",
        funFact: "Argentina is the birthplace of tango!"
      },
      {
        name: "South Africa",
        greeting: "Sawubona / Hello",
        festival: "Heritage Day",
        food: "Bobotie",
        funFact: "South Africa has 11 official languages!"
      },
      {
        name: "Indonesia",
        greeting: "Halo",
        festival: "Nyepi (Day of Silence)",
        food: "Nasi Goreng",
        funFact: "Indonesia has over 17,000 islands!"
      },
      {
        name: "Sweden",
        greeting: "Hej",
        festival: "Midsummer",
        food: "Meatballs",
        funFact: "Sweden recycles nearly 99% of its waste!"
      },
      {
        name: "Nigeria",
        greeting: "Hello",
        festival: "Durbar Festival",
        food: "Jollof Rice",
        funFact: "Nigeria is Africa's most populous country!"
      },
      {
        name: "Pakistan",
        greeting: "Assalamualaikum",
        festival: "Eid-ul-Fitr",
        food: "Nihari",
        funFact: "Pakistan is home to the world's second-highest mountain (K2)!"
      },
      {
        name: "Norway",
        greeting: "Hallo",
        festival: "National Day (Syttende Mai)",
        food: "Lutefisk",
        funFact: "Norwegians invented modern skiing!"
      },
      {
        name: "Philippines",
        greeting: "Kamusta",
        festival: "Sinulog",
        food: "Adobo",
        funFact: "The Philippines is made up of 7,641 islands!"
      },
      {
        name: "Vietnam",
        greeting: "Xin chào",
        festival: "Tet (Lunar New Year)",
        food: "Pho",
        funFact: "Vietnam is the world's second-largest coffee producer!"
      },
      {
        name: "Netherlands",
        greeting: "Hallo",
        festival: "King’s Day",
        food: "Stroopwafels",
        funFact: "There are more bicycles than people in the Netherlands!"
      },
      {
        name: "Saudi Arabia",
        greeting: "Salam Alaikum",
        festival: "Eid al-Adha",
        food: "Kabsa",
        funFact: "Saudi Arabia has no rivers!"
      },
      {
        name: "Thailand",
        greeting: "Sawasdee",
        festival: "Loy Krathong",
        food: "Green Curry",
        funFact: "Thailand’s name means ‘Land of the Free’!"
      },
      {
        name: "Ukraine",
        greeting: "Pryvit",
        festival: "Malanka (New Year’s Eve)",
        food: "Borscht",
        funFact: "Ukraine is the largest country entirely in Europe!"
      },
      {
        name: "Iran",
        greeting: "Salam",
        festival: "Nowruz",
        food: "Kebab",
        funFact: "Persian civilization dates back over 2,500 years!"
      }
  ];
  
  const container = document.getElementById("countries-container");
  const searchInput = document.getElementById("search");
  
  function displayCountries(filter = "") {
    container.innerHTML = "";
    countries
      .filter(c => c.name.toLowerCase().includes(filter.toLowerCase()))
      .forEach(country => {
        const card = document.createElement("div");
        card.className = "country-card";
        card.innerHTML = `
          <h2>${country.name}</h2>
          <p><strong>Greeting:</strong> ${country.greeting}</p>
          <p><strong>Festival:</strong> ${country.festival}</p>
          <p><strong>Food:</strong> ${country.food}</p>
          <p><strong>Fun Fact:</strong> ${country.funFact}</p>
        `;
        container.appendChild(card);
      });
  }
  
  displayCountries();
  
  searchInput.addEventListener("input", (e) => {
    displayCountries(e.target.value);
  });