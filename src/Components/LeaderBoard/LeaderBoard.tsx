import React, { useState, useEffect } from "react";
import { Modal } from "react-responsive-modal";
import { firestore } from "../../Helper/firebase";
import { Table, Tag, Space } from "antd";

import "react-responsive-modal/styles.css";

type scoreType = {
  name: string;
  score: number;
  id: any;
};

type leaderBoardProps = {
  open: boolean;
  onCloseModal: () => void;
};

const LeaderBoard: React.FC<leaderBoardProps> = ({ open, onCloseModal }) => {
  const [leaderBoard, setLeaderBoard] = useState<scoreType[]>([]);
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
  const columns = [
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
      <div>
        <Table columns={columns} dataSource={leaderBoard} />
      </div>
    </Modal>
  );
};

export default LeaderBoard;
