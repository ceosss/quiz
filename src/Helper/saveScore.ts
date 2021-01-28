import { firestore } from "./firebase";

type dataType = {
  name: string;
  score: number;
};

export const saveScore = async (data: dataType) => {
  firestore
    .collection("scores")
    .add(data)
    .then(() => console.log("Saved"))
    .catch((error) => console.error(error));
};
