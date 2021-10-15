import { DateTime } from "luxon";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import ReactSwipe from "react-swipe";

import { ArrowIcon, PlusIcon } from "../../components";
import { ArrowIconDirection, Routes } from "../../contracts";
import { useAppHooks } from "../../hooks";
import {
  DaySummaryComponent,
  DaySummaryContainer,
  WeekSummaryContainer,
  Wrapper,
} from "./Styles";

import { getCurrentWeek } from "../../utility";

const Homepage = () => {
  const [currentWeek, setCurrentWeek] = useState<string[]>([]);

  const history = useHistory();

  const { currentDate, selectedDate, setSelectedDate } = useAppHooks();

  useEffect(() => {
    if (selectedDate) setCurrentWeek(() => getCurrentWeek(selectedDate));
  }, []);

  return (
    <Wrapper>
      {/* TODO: Map the full week in here. */}
      {!!currentWeek && (
        <ReactSwipe
          swipeOptions={{
            continuous: false,
            startSlide: DateTime.fromISO(selectedDate).weekday - 1,
            transitionEnd: (index) => setSelectedDate(currentWeek[index]),
          }}
        >
          {currentWeek.map((day) => (
            <DaySummaryContainer.Wrapper key={day}>
              <DaySummaryContainer.Header>
                <DaySummaryContainer.HeaderText>
                  <h2>
                    {DateTime.fromISO(day).toLocaleString({
                      weekday: "short",
                      month: "short",
                      day: "numeric",
                    })}
                  </h2>
                </DaySummaryContainer.HeaderText>
                <DaySummaryContainer.HeaderControls>
                  <DaySummaryContainer.HeaderButtonContainer
                    onClick={() => history.push(`/${Routes.plan}`)}
                  >
                    <PlusIcon color="FFF9EB" />
                  </DaySummaryContainer.HeaderButtonContainer>
                  {DateTime.fromISO(day).weekday ===
                    DateTime.fromISO(currentDate).weekday && (
                    <DaySummaryContainer.HeaderButtonContainer>
                      <ArrowIcon direction={ArrowIconDirection.right} />
                    </DaySummaryContainer.HeaderButtonContainer>
                  )}
                </DaySummaryContainer.HeaderControls>
              </DaySummaryContainer.Header>
              <DaySummaryContainer.Content>
                <DaySummaryResistance />
                <DaySummaryCardio />
                <DaySummaryStretches />
              </DaySummaryContainer.Content>
            </DaySummaryContainer.Wrapper>
          ))}
        </ReactSwipe>
      )}
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
      <DaySummaryComponent.Icon>40</DaySummaryComponent.Icon>
      <DaySummaryComponent.TextContainer>
        <DaySummaryComponent.TextContainerUpper>
          Cardio
        </DaySummaryComponent.TextContainerUpper>
        <DaySummaryComponent.TextContainerLower>
          400 kCal
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
