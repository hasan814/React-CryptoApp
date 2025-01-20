import Pagination from "./components/elements/Pagination";
import TableCoin from "./components/modules/TableCoin";
import Search from "./components/modules/Search";
import Layout from "./Layout";
import Chart from "./components/modules/Chart";
import { useContext } from "react";
import { CryptoContext } from "./context/CryptoContext";

const App = () => {
  // ============= Context ===============
  const { chart } = useContext(CryptoContext);

  // ============= Rendering ===============
  return (
    <Layout>
      <Search />
      <TableCoin />
      <Pagination />
      {chart && <Chart />}
    </Layout>
  );
};

export default App;
