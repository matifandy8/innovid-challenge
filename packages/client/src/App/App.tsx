import * as React from "react";
import ListServers from "../components/ListServers";

import styles from "./App.module.scss";

const App: React.FC = () => {
  return (
    <main className={styles.container}>
       <ListServers/>
    </main>
  );
};

export default App;
