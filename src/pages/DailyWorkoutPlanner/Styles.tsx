import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;

  flex-direction: column;

  height: 100%;

  padding: 1rem;

  overflow: hidden;
`;

// Exercise List

export const ExerciseListContainer = {
  Card: styled.div`
    border: 2px solid green;
    border-radius: 35px;

    height: 15rem;

    padding: 1rem;

    width: calc((100% - 1rem) / 2);
  `,
  Wrapper: styled.div`
    display: flex;

    flex-wrap: wrap;

    gap: 1rem;

    overflow: hidden auto;
  `,
};
