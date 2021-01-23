import axios from "axios";
const mapCategory = (category: string) => {
  switch (category) {
    case "film":
      return 11;
    case "tv":
      return 14;
    case "game":
      return 15;
    case "music":
      return 12;
  }
};

const getQuestions = async (category: string, difficulty: string) => {
  const mappedCategory: number | undefined = mapCategory(category);
  console.log(category, mappedCategory, difficulty);
  const url: string = `https://opentdb.com/api.php?amount=10&category=${mappedCategory}&difficulty=${difficulty}`;

  const data = await axios.get(url);
  return data.data.results;
};

export default getQuestions;
