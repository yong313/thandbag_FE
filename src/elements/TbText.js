import React from "react";
import styled from "styled-components";

const TbText = (props) => {
  const {
    bold,
    color,
    size,
    align,
    margin,
    children,
    LHeight,
    family,
    padding,
    _onClick,
    cursor,
  } = props;

  const styles = {
    margin: margin,
    bold: bold,
    color: color,
    size: size,
    align: align,
    LHeight: LHeight,
    family: family,
    padding: padding,
    cursor: cursor,
  };

  return (
    <>
      <P {...styles} onClick={_onClick}>
        {children}
      </P>
    </>
  );
};

TbText.defaultProps = {
  cihldren: null,
  bold: false,
  color: "",
  size: "18px",
  align: false,
  margin: false,
  padding: false,
  family: "",
  cursor: false,
  _onClick: () => {},
};

const P = styled.p`
  color: ${(props) => props.color};
  font-family: ${(props) => (props.family ? `${props.family}` : "KOTRAHOPE")};
  font-size: ${(props) => props.size};
  font-weight: ${(props) => (props.bold ? `${props.bold}` : "")};
  text-align: ${(props) => (props.align ? `${props.align}` : "")};
  line-height: ${(props) => (props.LHeight ? `${props.LHeight}` : "")};
  margin: ${(props) => (props.margin ? `${props.margin}` : "")};
  padding: ${(props) => (props.padding ? `${props.padding}` : "")};
  cursor: ${(props) => props.cursor};
  word-break: break-all;
  letter-spacing: -0.5px;
  font-family: "KOTRAHOPE";
`;

export default TbText;
