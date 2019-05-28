import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
`;

const Sheet = styled.div`
  margin-left: 20px;
  display: flex;
  flex-direction: column;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Label = styled.span`
  margin-left: 15px;
  font-size: 12px;
  font-style: italic;
  color: #aaaaaa;
`;

const CollectionName = styled.div`
  margin: 10px;
  font-weight: bold;
  font-style: italic;
`;

const IconProofs = ({ className, label, iconCollection }) => {
  const iconNames = Object.keys(iconCollection);
  const count = iconNames.length;
  return (
    <Wrapper className={className}>
      <CollectionName>
        {label} <sup>{count}</sup>
      </CollectionName>
      <hr />
      <Sheet>
        {iconNames.map((name, index) => {
          const Icon = iconCollection[name];
          return (
            <Row key={index}>
              <Icon />
              <Label>{name}</Label>
            </Row>
          );
        })}
      </Sheet>
    </Wrapper>
  );
};

export { IconProofs };
export default IconProofs;
