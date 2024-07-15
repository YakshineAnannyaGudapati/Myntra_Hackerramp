import { Box } from "@chakra-ui/layout";
import { useState, React  } from "react";
import Chatbox from "../components/ChatBox";
import MyChats from "../components/MyChats";
import SideDrawer from "../components/miscellaneous/SideDrawer";
import ProfileModal from "../components/miscellaneous/ProfileModal";
import { ChatState } from "../Context/ChatProvider";
import { useParams } from 'react-router-dom';

const Chatpage = () => {
  const [fetchAgain, setFetchAgain] = useState(false);
  const { user } = ChatState();

  const { id, product } = useParams();

  return (
    <>
      <div style={{ width: "100%" }}>
        {user && <SideDrawer />}
        {/* <SideDrawer /> */}
        {console.log(user)}
        <Box
          display="flex"
          justifyContent="space-between"
          w="100%"
          h="91.5vh"
          p="10px"
        >
          {user && <MyChats fetchAgain={fetchAgain}  openChat={id} product={product} />}
          {user && (
            <Chatbox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
          )}
        </Box>
      </div>
    </>
  );
};

export default Chatpage;
