const btns = document.getElementById("btns");

btns.addEventListener("click", async (e) => {
  const titre = document.getElementById("titre").value;
  console.log(titre);
  const description = document.getElementById("des").value;
  const date = document.getElementById("date").value;

  const formData = {
    titre: titre,
    description: description,
    date: date,
  };

  try {
    const response = await fetch("/add", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    if (!response.ok) {
      throw new Error("Erreur lors de l'envoi des données");
    }
    const responseData = await response.json();
    console.log(responseData);
  } catch (error) {
    console.error("Erreur:", error);
  }
});

const searchInput = document.getElementById("searchList");

searchInput.addEventListener("click", async (e) => {
  e.preventDefault();
  e.stopPropagation();
  const taskCherche = document.getElementById("inputSerach").value;
  try {
    const response = fetch("/", {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(taskCherche),
    });
    if (!response.ok) {
      throw new Error("Erreur lors de l'envoi des données");
    }
    const responseData = await response.json();
    console.log(responseData);
  } catch (error) {
    console.error("Erreur:", error);
  }
});
