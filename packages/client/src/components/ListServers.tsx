import * as React from "react";
import CardServer from "./CardServer";

import styles from "./ListServers.module.scss";

const ListServers: React.FC = () => {
  // mockear servers
  const servers = [1, 2, 3, 4];

  return (
    <main className={styles.container}>
      {servers.map((server) => (
        <CardServer key={server.toString()} number={server.toString()}/>
      ))}
    </main>
  );
};

export default ListServers;
