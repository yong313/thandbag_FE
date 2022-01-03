import React from "react";
import styled from "styled-components";
import { Grid, Text } from "../elements/TbIndex";
import { history } from "../redux/configureStore";
import { ReactComponent as Arrow } from "../static/icons/arrow.svg";

const Heads = (props) => {
  const { is_anoter, chat, stompDisConnect ,none, bg, color, fill, stroke } = props;

  const styles = {
    bg: bg,
    color: color,
    fill: fill,
    stroke: stroke,
  };

  // another 헤드
  if (is_anoter) {
    return (
      <React.Fragment>
        <HeadBox {...styles}>
          <Grid
            width="10%"
            height="70px"
            position="absolute"
            top="0"
            left="20px"
            flex="flex"
          >
            <BackIcon
              onClick={() => {
                history.push("/main");
              }}
            >
              <Arrow {...styles} width="20" height="20" />
            </BackIcon>
          </Grid>
          <Grid width="100%" height="70px" flex="flex">
            <Text size="1.4rem" {...styles}>
              {props.text}
            </Text>
          </Grid>
        </HeadBox>
      </React.Fragment>
    );
  }

  if (chat) {
    return (
      <React.Fragment>
        <HeadBox {...styles}>
          <Grid 
            width="10%"
            height="70px"
            position="absolute"
            top="0"
            left="20px"
            flex="flex"
          >
            <BackIcon
              onClick={() => {
                history.push("/TbChatList");
                stompDisConnect()
              }}
            >
              <Arrow {...styles} width="20" height="20" />
            </BackIcon>
          </Grid>
          <Grid width="100%" height="70px" flex="flex">
            <Text size="1.4rem" {...styles}>
              {props.text}
            </Text>
          </Grid>
        </HeadBox>
      </React.Fragment>
    )
  }


  if (none) {
    return (
      <React.Fragment>
        <HeadBox {...styles}>
          <Grid width="100%" height="70px" flex="flex">
            <Text size="1.4rem" {...styles}>
              {props.text}
            </Text>
          </Grid>
        </HeadBox>
      </React.Fragment>
    );
  }

  return (
    // default 헤드
    <React.Fragment>
      <HeadBox>
        <Grid width="20%" height="70px" bg="#fff" flex="flex">
          <Text size="2.8rem">🍔</Text>
        </Grid>
        <Grid width="80%" height="70px" bg="#fff" flex="flex" />
      </HeadBox>
    </React.Fragment>
  );
};

const HeadBox = styled.div`
  width: 420px;
  margin: 0 auto;
  height: auto;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9;
  ${(props) => (props.color ? `color: ${props.color};` : "")};
  ${(props) => (props.bg ? `background-color: ${props.bg};` : "")};
`;

const BackIcon = styled.div`
  width: auto;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export default Heads;
