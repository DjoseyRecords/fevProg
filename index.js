
const fetchApi = async (url) => {
  try {
    const response = await fetch(url);
    return response.ok ? await response.json() : null;
  } catch (error) {
    console.error("Une erreur est survenue", error);
    return null;
  }
};

// Appel immédiat de la fonction asynchrone anonyme
const getApi = (async () => {
  const works = await fetchApi();
  console.log(works);
})();

// Crée une figure
const createFigure = ({ id, imageUrl, title }) => {
  const figure = document.createElement("figure");
  figure.dataset.id = id;

  const img = document.createElement("img");
  img.src = imageUrl;

  const caption = createElemWithText("activities", title);

  figure.append(img, caption);
  return figure;
};
// Affiche les travaux
const displayWorks = (works, container) => {
  container.innerHTML = "";
  works.forEach((work) => container.appendChild(createFigure(work)));
};
