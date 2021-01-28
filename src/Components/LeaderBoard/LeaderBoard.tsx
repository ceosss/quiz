import React, { useState, useEffect } from "react";
import { firestore } from "../../Helper/firebase";
type leaderBoardType = {
  name: string;
  score: number;
  id: any;
};

const LeaderBoard = () => {
  const [leaderBoard, setLeaderBoard] = useState<leaderBoardType[]>([]);
  useEffect(() => {
    firestore.collection("scores").onSnapshot((data) => {
      let array: any[] = [];
      data.docs.map((doc: any) => {
        array.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      setLeaderBoard(array);
    });
  }, []);
  return (
    <div>
      {leaderBoard.length
        ? leaderBoard.map((score) => (
            <p key={score.id}>
              name: {score.name}
              score: {score.score}
            </p>
          ))
        : null}
    </div>
  );
};

export default LeaderBoard;
