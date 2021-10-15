import { useEffect } from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import { AppHeader } from "./components";
import { useAppHooks } from "./hooks";
import { DailyWorkoutPlanner, Homepage } from "./pages";
import { ContentContainer, HeaderContainer, RootWrapper } from "./Styles";
import { checkLocalStorageData } from "./utility";

const App = () => {
  const { setInitializing } = useAppHooks();

  const handleCheckLocalStorage = async () => {
    setInitializing(true);

    checkLocalStorageData();

    setInitializing(false);
  };

  useEffect(() => {
    handleCheckLocalStorage();
  }, []);

  return (
    <RootWrapper>
      <HeaderContainer>
        <AppHeader />
      </HeaderContainer>
      <ContentContainer>
        <Switch>
          <Route exact component={Homepage} path="/" />
          <Route exact component={DailyWorkoutPlanner} path="/plan" />
          <Redirect to="/" />
        </Switch>
      </ContentContainer>
    </RootWrapper>
  );
};

export default App;
