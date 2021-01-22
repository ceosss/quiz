const mapCategory = (category: string) => {
  switch (category) {
    case "movie":
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
  console.log(category, difficulty);

  const mappedCategory: number | undefined = mapCategory(category);
  const url: string = `https://opentdb.com/api.php?amount=10&category=${mappedCategory}&difficulty=${difficulty}`;

  const data = await fetch(url);
  return data;
};

export default getQuestions;
