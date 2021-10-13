import { AppHeader } from "./components";
import { Homepage } from "./pages";
import { ContentContainer, HeaderContainer, RootWrapper } from "./Styles";

const App = () => {
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
