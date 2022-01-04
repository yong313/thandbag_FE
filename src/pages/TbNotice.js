import React from "react";
import { Button, Grid, Text, Image } from "../elements/TbIndex";
import { history } from "../redux/configureStore";
import { useDispatch, useSelector } from "react-redux";
import Heads from "../components/Heads";
import { actionCreators as chatActions } from "../redux/modules/chat";
import TbNavgation from "../components/TbNavigation";

const TbNotice = (props) => {
    const dispatch = useDispatch();
    const notice = useSelector((state) => (state.chat.notice));
    console.log(notice)
    
    React.useEffect(() => {
        dispatch(chatActions.getNoticeDB())
    },[dispatch])

    return (
        <>
        <Heads none bg="#fff" stroke="#fff" color="#333" text="알림" />
        <Grid margin="70px 0 0 0">
            <Grid
            borderB
            borderT
            padding="16px 20px"
            width="100%"
            height="45px"
            flex="flex"
            justify="space-between"
            bg="#FBF7F7"
            
            >
            <Image shape="circle" Isize="30" />
            <Grid align="center" width="60%">
                <Text size="15px" family="NotoSansCJK">
                아직 등록된 공지가 없어요!
                </Text>
            </Grid>
            <Grid flex="flex" direction="column" align="center" width="20%">
                <Grid
                width="23px"
                height="23px"
                bg="#FF5454"
                flex="flex"
                radius="20px"
                >
                <Text color="#fff" size="11px">
                    N
                </Text>
                </Grid>
            </Grid>
            </Grid>
            {/* 맵돌릴구간 */}
            {notice?.map((n,idx) => {
                return (
                    <Grid
                    borderB
                    borderT
                    padding="16px 20px"
                    width="100%"
                    flex="flex"
                    justify="space-between"
                    bg="#FFF"
                    _onClick={()=>{
                        // INVITEDCHAT = "/TbChatDetail/:roomId"
                        // REPLY = "/TbTwoDetail/:postid"
                        // PICKED = "/TbTwoDetail/:postid"
                        // LEVELCHANGE = "/MyPage"
                        if(n.type === "INVITEDCHAT"){
                            history.push(`/TbChatDetail/${n.chatRoomId}`)
                        } else if(n.type === "REPLY"){
                            history.push(`/TbTwoDetail/${n.postId}`)
                        } else if(n.type === "PICKED"){
                            history.push(`/TbTwoDetail/${n.postId}`)
                        } else if(n.type === "LEVELCHANGE"){
                            history.push(`/MyPage`)
                        }
                        dispatch(chatActions.postNoticeDB(n.alarmId))
                    }}
                    >
                    <Image shape="circle" Isize="50" />
                    <Grid width="60%">
                        <Text padding="0 0 10px 0" size="20px">
                        {n.message}
                        </Text>
                    </Grid>
                    <Grid flex="flex" direction="column" align="center" width="20%">
                    {n.isRead == false &&
                        <Grid
                        width="23px"
                        height="23px"
                        bg="#FF5454"
                        flex="flex"
                        radius="20px"
                        >
                        <Text color="#fff" size="11px">
                            N
                        </Text>
                        </Grid>
                        }
                    </Grid>
                    </Grid>
                )
            })}
            <TbNavgation/>
        </Grid>
        
        </>
    )
}

export default TbNotice;
