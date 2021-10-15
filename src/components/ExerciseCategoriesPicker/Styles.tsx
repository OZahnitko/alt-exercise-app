import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 1rem;

  display: flex;

  flex-wrap: wrap;

  gap: 0.5rem;
`;

// Category Chip

interface CategoryChipContainerWrapper {
  selected: boolean;
}

export const CategoryChipContainer = {
  Wrapper: styled.div<CategoryChipContainerWrapper>`
    background: ${(props) => (props.selected ? "#E46472" : "white")};
    border-radius: 25px;

    color: ${(props) => props.selected && "white"};

    padding: 0.5rem;

    transition: all 0.25s;
  `,
};
