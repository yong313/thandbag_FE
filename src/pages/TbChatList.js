import React from "react";
import Heads from "../components/Heads";
import { Grid, Image, Text } from "../elements/TbIndex";
import { history } from "../redux/configureStore";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as chatActions } from "../redux/modules/chat";
import TbNavigation from "../components/TbNavigation";
import styled from "styled-components";

const TbChatList = (props) => {
  const dispatch = useDispatch();
  const chatList = useSelector((state) => state.chat.chatListInfo);

  React.useEffect(() => {
    dispatch(chatActions.getChatListDB());
  }, []);

  return (
    <>
      <Heads none bg="#fff" stroke="#fff" color="#333" borderB text="채팅" />
      <TbNavigation />
      <TbChatListBox>
        {chatList?.map((m, idx) => {
          return (
            <Grid
              hover2
              position="relative"
              borderB
              padding="0 20px"
              width="100%"
              height="90px"
              flex="flex"
              justify="space-between"
              cursor="pointer"
              _onClick={() => {
                history.push(`/TbChatDetail/${m.roomId}`);
              }}
            >
              <Grid width="auto" height="auto">
                <Image src={m.subProfileImgUrl} shape="circle" Isize="48" />
              </Grid>
              <Grid width="67%" margin="0 6% 0 0">
                <Text size="20px">{m.subNickname}</Text>
                <Text
                  elli
                  color="#595959"
                  bold="bold"
                  size="14px"
                  margin="0.3rem 0 0 0"
                  family="NotoSansCJK"
                >
                  {m.lastContent}
                </Text>
              </Grid>
              <Grid
                width="auto"
                height="auto"
                position="absolute"
                right="20px"
                top="10px"
              >
                <Text size="10px" color="#878787" blod="bold" family="NotoSansCJK">
                  {m.lastContentCreatedTime}
                </Text>
              </Grid>

              <Grid flex="flex" width="auto">
                <Grid
                  width="23px"
                  height="23px"
                  bg="#FF5454"
                  flex="flex"
                  radius="20px"
                >
                  <Text color="#fff" size="11px">
                    {m.unreadCount}
                  </Text>
                </Grid>
              </Grid>
            </Grid>
          );
        })}
      </TbChatListBox>
    </>
  );
};

const TbChatListBox = styled.div`
  width: 100%;
  height: 100vh;
  padding: 70px 0;
  overflow-y: scroll;
`;

export default TbChatList;
