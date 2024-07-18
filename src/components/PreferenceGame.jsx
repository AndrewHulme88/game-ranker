import React, { useState } from "react";

const PreferenceGame = () => {
  const [category, setCategory] = useState("");
  const [currentDataset, setCurrentDataset] = useState([]);
  const [round, setRound] = useState(1);  const [option1, setOption1] = useState("");
  const [option2, setOption2] = useState("");
  const [ranking, setRanking] = useState([]);  const [result, setResult] = useState("");

  // Possible categories and corresponding data
  const datasets = {
    movies: [
      "The Shawshank Redemption",
      "The Godfather",
      "The Dark Knight",
      "12 Angry Men",
      "Schindler's List",
      "The Lord of the Rings: The Return of the King",
      "Pulp Fiction",
      "The Good, the Bad and the Ugly",
      "Forrest Gump",
      "Inception",
      "The Lord of the Rings: The Fellowship of the Ring",
      "Fight Club",
      "Star Wars: Episode V - The Empire Strikes Back",
      "Inception",
      "The Matrix",
      "Interstellar",
      "Forrest Gump",
      "Seven Samurai",
      "City of God",
      "Spirited Away"
    ],
    videoGames: [
      // Add more video game names
    ],
    sports: [
     // Add more sports names
    ],
    books: [
     // Add more book names
    ],
    music: [
      // Add more music artist names
    ],
  };

  const getTwoRandomOptions = () => {      let option1 = currentDataset[Math.floor(Math.random() * currentDataset.length)];   let option2 = currentDataset[Math.floor(Math.random() * currentDataset.length)];

    while (option1 === option2) {
      option2 = currentDataset[Math.floor(Math.random() *     currentDataset.length)];
    }   return [option1, option2];;
  };

  const startGame = () => {
    let selectedCategory = datasets[category];
    if (!selectedCategory) {
      alert("Please select a valid category.");   return;
    }
    setCurrentDataset(selectedCategory.slice());
    setRanking([]);
    setRound(1);
    nextRound();
  };

  const nextRound = () => {
    if (currentDataset.length <= 1) {
      const winner = currentDataset[0];
      setResult(`The option you like the best is: ${winner}`);
      setRanking([...ranking, winner]);
      return;
    }
    setResult("");
    const [newOption1, newOption2] =     getTwoRandomOptions();
    setOption1(newOption1);
    setOption2(newOption2);
    setRound(round + 1);
  };

  const handleOptionClick = (selectedOption) => {
    currentDataset = currentDataset.filter(option => option !==    selectedOption);
    ranking.push(selectedOption);
    nextRound();
  };

  return (
    <div>
      <h1>Preference Game</h1>
      <select id="category" value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="">Select a Category</option>
        {Object.keys(datasets).map((cat, index) => <option key={index}     value={cat}>{cat}</option>)}
      </select>
      <button id="start" onClick={startGame}>
        Start
      </button>
      <p id="round">{round > 0 ? `Round ${round}` : ""}</p>
      <p id="options">{round > 0 ? `Which option do you prefer?` : ""}          </p>
      {round > 0 && (
        <>
          <button id="option1" onClick={() =>     handleOptionClick(option1)}>
            {option1}
          </button>
          <button id="option2" onClick={() => handleOptionClick(option2)}>
            {option2}
          </button>
        </>
      )}
      <p id="result">{result}</p>
      <ol id="ranking">
        {ranking.map((item, index) => (
          <li key={index}>{`${index + 1}. ${item}`}</li>
        ))}
      </ol>
    </div>
  );
};
export default PreferenceGame;
