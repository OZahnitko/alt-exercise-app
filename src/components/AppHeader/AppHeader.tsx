import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

import { AppHeaderContent, AppHeaderControls, Wrapper } from "./Styles";

const AppHeader = () => {
  const [hidden, setHidden] = useState(false);

  return (
    <Wrapper layout>
      <AppHeaderControls.Wrapper layout>
        <button onClick={() => setHidden((hidden) => !hidden)}>
          Hide/Show
        </button>
      </AppHeaderControls.Wrapper>
      <AppHeaderContent.Wrapper contentHidden={hidden} layout>
        <AnimatePresence>
          {!hidden && (
            <motion.div
              transition={{ duration: 0.25 }}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div>
                <div>All the content will go here</div>
                <div>All the content will go here</div>
                <div>All the content will go here</div>
                <div>All the content will go here</div>
                <div>All the content will go here</div>
                <h1>event me</h1>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </AppHeaderContent.Wrapper>
    </Wrapper>
  );
};

export default AppHeader;
