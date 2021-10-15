import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 1rem;

  display: flex;

  flex-wrap: wrap;

  gap: 0.5rem;
`;

// Category Chip

interface CategoryChipContainerWrapper {
  included?: boolean;
  isIcon?: boolean;
  selected?: boolean;
}

export const CategoryChipContainer = {
  Wrapper: styled.div<CategoryChipContainerWrapper>`
    align-items: center;

    background: ${(props) =>
      props.selected
        ? "#E46472"
        : props.included || props.isIcon
        ? "#6588E4"
        : "white"};
    border-radius: 25px;

    color: ${(props) => (props.selected || props.included) && "white"};

    display: flex;

    justify-content: center;

    padding: 0.5rem;

    transition: all 0.25s;
  `,
};
