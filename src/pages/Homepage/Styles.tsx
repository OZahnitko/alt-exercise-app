import styled from "styled-components";

import { theme } from "../../theme";

export const Wrapper = styled.div`
  display: flex;

  flex-direction: column;

  height: 100%;

  overflow: hidden;
`;

export const DaySummaryContainer = {
  Content: styled.div`
    margin-top: 1rem;

    & :last-child {
      margin-bottom: 0;
    }
  `,
  Header: styled.div`
    ${theme.helpers.spaceBetweenChildren}
  `,
  HeaderButtonContainer: styled.div`
    ${theme.helpers.centerChildrenBothAxis}

    background-color: #309398;
    border-radius: 50%;

    color: #fff9eb;

    height: 40px;

    margin-right: 0.5rem;

    width: 40px;
  `,
  HeaderControls: styled.div`
    display: flex;

    & :last-child {
      margin-right: 0;
    }
  `,
  HeaderText: styled.div``,
  Wrapper: styled.div`
    padding: 1rem 1rem 0 1rem;
  `,
};

export const WeekSummaryContainer = {
  Wrapper: styled.div`
    border: 1px solid blue;

    flex: 1;

    margin-top: 1rem;

    overflow: hidden auto;

    padding: 0 1rem 1rem 1rem;
  `,
};

export const DaySummaryComponent = {
  Icon: styled.div`
    ${theme.helpers.centerChildrenBothAxis}

    background-color: #e46472;
    border-radius: 50%;

    color: #fff9eb;

    font-weight: bold;

    height: 40px;

    width: 40px;
  `,
  TextContainer: styled.div`
    display: flex;

    flex-direction: column;

    margin-left: 0.5rem;
  `,
  TextContainerLower: styled.div`
    color: #8e8b82;

    font-size: 0.75rem;
    font-weight: bold;
  `,
  TextContainerUpper: styled.div`
    font-size: 1.25rem;
    font-weight: bold;
  `,
  Wrapper: styled.div`
    align-items: center;

    display: flex;

    margin-bottom: 0.5rem;
    margin-left: 0.5rem;
  `,
};
