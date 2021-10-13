import { useEffect } from "react";

import { AppHeader } from "./components";
import { useAppHooks } from "./hooks";
import { Homepage } from "./pages";
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
        <Homepage />
      </ContentContainer>
    </RootWrapper>
  );
};

export default App;
