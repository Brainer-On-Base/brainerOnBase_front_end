import styled from "styled-components";

export const TabContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border: 3px solid ${({ theme }) => theme.purpleMedium};
  border-radius: 25px;
`;

export const Tab = styled.h1`
  background: ${({ theme, active }) =>
    active ? theme.shadePurpleDark : "transparent"};
  color: ${({ theme, active }) =>
    active ? theme.purpleLight : theme.purpleMedium};
  font-weight: var(--weight-bold);
  border-radius: 25px;
  padding: 5px 20px;
  font-size: ${({ moreFont }) => (!moreFont ? "var(--p14)" : "var(--h6)")};
`;
