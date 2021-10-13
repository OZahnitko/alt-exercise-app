import { AnimateSharedLayout } from "framer-motion";

import { AppHeader } from "./components";
import { AppContentContainer, AppHeaderContainer, RootWrapper } from "./Styles";

const App = () => {
  return (
    <AnimateSharedLayout type="switch">
      <RootWrapper layout>
        <AppHeaderContainer layout>
          <AppHeader />
        </AppHeaderContainer>
        <AppContentContainer layout></AppContentContainer>
      </RootWrapper>
    </AnimateSharedLayout>
  );
};

export default App;
