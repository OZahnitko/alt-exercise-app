import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;

  flex-direction: column;

  height: 100%;

  padding: 1rem;

  overflow: hidden;
`;

// Exercise List

interface ExerciseListContainerCardProps {
  expanded: boolean;
}

export const ExerciseListContainer = {
  Card: styled.div<ExerciseListContainerCardProps>`
    background-color: #6588e4;
    border-radius: 35px;

    color: #fff9eb;

    height: 10rem;

    padding: 1rem;

    user-select: none;

    width: ${(props) => (props.expanded ? "100%" : "calc((100% - 1rem) / 2)")};
  `,
  Wrapper: styled.div`
    display: flex;

    flex-wrap: wrap;

    gap: 1rem;

    overflow: hidden auto;
  `,
};
