const scientists = [
    { name: "Albert", surname: "Einstein", born: 1879, dead: 1955 },
    { name: "Karl", surname: "Friedrich", born: 1727, dead: 1792 },
    { name: "August", surname: "Mobius", born: 1790, dead: 1868 },
    { name: "Marie", surname: "Curien", born: 1867, dead: 1934 },
    { name: "Johannes", surname: "Kepler", born: 1571, dead: 1630 },
    { name: "Nicolaus", surname: "Copernicus", born: 1473, dead: 1543 },
    { name: "Nikolay", surname: "Zelinsky", born: 1861, dead: 1953 },
    { name: "Igor", surname: "Kurchatov", born: 1903, dead: 1960 },
    { name: "Konstantin", surname: "Tsiolkovsky", born: 1857, dead: 1935 },
    { name: "Nikolay", surname: "Zhukovsky", born: 1847, dead: 1921 },
    { name: "Norbert", surname: "Wiener", born: 1894, dead: 1964 },
    { name: "Nikolay", surname: "Pirogov", born: 1810, dead: 1881 },
  ];
  
  const buttons = document.querySelectorAll(".science__button, .science__button2");
  const items = document.querySelectorAll(".science__item");
  
  const clearHighlight = () => {
    items.forEach((item) => {
      item.style.background = "#d9d9d9";
    });
  };
  
  buttons[0].addEventListener("click", () => {
    clearHighlight();
    scientists
      .filter((s) => s.born >= 1801 && s.born <= 1900)
      .forEach((scientist) => {
        items.forEach((item) => {
          if (item.textContent.includes(scientist.name)) {
            item.style.background = "rgba(0, 0, 0, 0.5)";
            
          }
        });
      });
  });
  
  buttons[1].addEventListener("click", () => {
    alert("Albert Einstein родился в 1879 году");
  });
  
  buttons[2].addEventListener("click", () => {
    clearHighlight();
    const sorted = [...items].sort((a, b) => a.textContent.localeCompare(b.textContent));
    document.querySelector(".science__list").replaceChildren(...sorted);
  });
  
  buttons[3].addEventListener("click", () => {
    clearHighlight();
    scientists
      .filter((s) => s.surname.startsWith("C"))
      .forEach((scientist) => {
        items.forEach((item) => {
          if (item.textContent.includes(scientist.name)) {
            item.style.background = "rgba(0, 0, 0, 0.5)";
            
          }
        });
      });
  });
  
  buttons[4].addEventListener("click", () => {
    clearHighlight();
    const sorted = [...items].sort((a, b) => {
      const ageA = scientists.find((s) => a.textContent.includes(s.name));
      const ageB = scientists.find((s) => b.textContent.includes(s.name));
      return ageB.dead - ageB.born - (ageA.dead - ageA.born);
    });
    document.querySelector(".science__list").replaceChildren(...sorted);
  });
  
  buttons[5].addEventListener("click", () => {
    clearHighlight();
    items.forEach((item) => {
      if (item.textContent.startsWith("A")) {
        item.remove();
      }
    });
  });
  
  buttons[6].addEventListener("click", () => {
    clearHighlight();
    const latest = scientists.reduce((latest, s) => (s.born > latest.born ? s : latest));
    items.forEach((item) => {
      if (item.textContent.includes(latest.name)) {
        item.style.background = "rgba(0, 0, 0, 0.5)";
        
      }
    });
  });
  
  buttons[7].addEventListener("click", () => {
    clearHighlight();
    const oldest = scientists.reduce((oldest, s) => (s.dead - s.born > oldest.dead - oldest.born ? s : oldest));
    const youngest = scientists.reduce((youngest, s) => (s.dead - s.born < youngest.dead - youngest.born ? s : youngest));
    items.forEach((item) => {
      if (item.textContent.includes(oldest.name) || item.textContent.includes(youngest.name)) {
        item.style.background = "rgba(0, 0, 0, 0.5)";
        
      }
    });
  });
  
  buttons[8].addEventListener("click", () => {
    clearHighlight();
    scientists
      .filter((s) => s.name[0] === s.surname[0])
      .forEach((scientist) => {
        items.forEach((item) => {
          if (item.textContent.includes(scientist.name)) {
            item.style.background = "rgba(0, 0, 0, 0.5)";
            
          }
        });
      });
  });