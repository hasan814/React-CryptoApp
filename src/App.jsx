import Pagination from "./components/elements/Pagination";
import TableCoin from "./components/modules/TableCoin";
import Layout from "./Layout";

const App = () => {
  return (
    <Layout>
      <TableCoin />
      <Pagination />
    </Layout>
  );
};

export default App;
