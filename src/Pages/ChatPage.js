import React, { useEffect, useState } from "react";
import axios from "axios";
import { Heading } from "@chakra-ui/react";

const ChatPage = () => {
  const [chats, setChats] = useState([]);

  const fetchData = async () => {
    const { data } = await axios.get("/api/chats");
    setChats(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Heading as="h4" size="md">
        ChatPage
      </Heading>
      {chats?.map((chat) => {
        return (
          <div key={chat._id}>
            <h2>{chat?.chatName}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default ChatPage;
