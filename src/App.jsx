import Pagination from "./components/elements/Pagination";
import TableCoin from "./components/modules/TableCoin";
import Search from "./components/modules/Search";
import Layout from "./Layout";

const App = () => {
  return (
    <Layout>
      <Search />
      <TableCoin />
      <Pagination />
    </Layout>
  );
};

export default App;
