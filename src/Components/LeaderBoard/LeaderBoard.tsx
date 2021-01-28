import React, { useState, useEffect } from "react";
import { Modal } from "react-responsive-modal";
import { firestore } from "../../Helper/firebase";
import { Table } from "antd";

import "react-responsive-modal/styles.css";
import "./LeaderBoard.css";

type scoreType = {
  name: string;
  score: number;
  id: any;
};

type leaderBoardProps = {
  open: boolean;
  onCloseModal: () => void;
};

type columnType = {
  title: string;
  dataIndex: string;
  key: string;
};

const LeaderBoard: React.FC<leaderBoardProps> = ({ open, onCloseModal }) => {
  const [leaderBoard, setLeaderBoard] = useState<scoreType[]>([]);
  useEffect(() => {
    firestore
      .collection("scores")
      .orderBy("score", "desc")
      .onSnapshot((data) => {
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
  const columns: columnType[] = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Score",
      dataIndex: "score",
      key: "score",
    },
  ];
  return (
    <Modal open={open} onClose={onCloseModal} center>
      <div className="leaderboard">
        <h1>Leaderboard</h1>
        <Table columns={columns} dataSource={leaderBoard} />
      </div>
    </Modal>
  );
};

export default LeaderBoard;
