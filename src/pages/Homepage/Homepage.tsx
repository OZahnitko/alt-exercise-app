import ReactSwipe from "react-swipe";
import { PlusIcon } from "../../components";
import {
  DaySummaryComponent,
  DaySummaryContainer,
  WeekSummaryContainer,
  Wrapper,
} from "./Styles";

const Homepage = () => {
  return (
    <Wrapper>
      {/* TODO: Map the full week in here. */}
      <ReactSwipe swipeOptions={{ continuous: false }}>
        <DaySummaryContainer.Wrapper>
          <DaySummaryContainer.Header>
            <DaySummaryContainer.HeaderText>
              <h2>Wed, Oct 13</h2>
            </DaySummaryContainer.HeaderText>
            <DaySummaryContainer.HeaderButtonContainer
              onClick={() => console.log("add")}
            >
              <PlusIcon />
            </DaySummaryContainer.HeaderButtonContainer>
          </DaySummaryContainer.Header>
          <DaySummaryContainer.Content>
            <DaySummaryResistance />
            <DaySummaryCardio />
            <DaySummaryStretches />
          </DaySummaryContainer.Content>
        </DaySummaryContainer.Wrapper>
      </ReactSwipe>
      <WeekSummaryContainer.Wrapper>
        <h1>Week Summary</h1>
      </WeekSummaryContainer.Wrapper>
    </Wrapper>
  );
};

export default Homepage;

export const DaySummaryResistance = () => {
  return (
    <DaySummaryComponent.Wrapper>
      <DaySummaryComponent.Icon>4</DaySummaryComponent.Icon>
      <DaySummaryComponent.TextContainer>
        <DaySummaryComponent.TextContainerUpper>
          Resistance
        </DaySummaryComponent.TextContainerUpper>
        <DaySummaryComponent.TextContainerLower>
          30 minutes / 2 areas / 5%
        </DaySummaryComponent.TextContainerLower>
      </DaySummaryComponent.TextContainer>
    </DaySummaryComponent.Wrapper>
  );
};

export const DaySummaryCardio = () => {
  return (
    <DaySummaryComponent.Wrapper>
      <DaySummaryComponent.Icon>1</DaySummaryComponent.Icon>
      <DaySummaryComponent.TextContainer>
        <DaySummaryComponent.TextContainerUpper>
          Cardio
        </DaySummaryComponent.TextContainerUpper>
        <DaySummaryComponent.TextContainerLower>
          40 minutes / 400 kCal
        </DaySummaryComponent.TextContainerLower>
      </DaySummaryComponent.TextContainer>
    </DaySummaryComponent.Wrapper>
  );
};

export const DaySummaryStretches = () => {
  return (
    <DaySummaryComponent.Wrapper>
      <DaySummaryComponent.Icon>5</DaySummaryComponent.Icon>
      <DaySummaryComponent.TextContainer>
        <DaySummaryComponent.TextContainerUpper>
          Stretches
        </DaySummaryComponent.TextContainerUpper>
        <DaySummaryComponent.TextContainerLower>
          30 minutes
        </DaySummaryComponent.TextContainerLower>
      </DaySummaryComponent.TextContainer>
    </DaySummaryComponent.Wrapper>
  );
};
