// import "./App.css";
import "./css/common/common.css";
import "./css/normalize.css";
import "./css/style.css";

import Layout from "./layouts/Layout";
import Main from "./pages/Main";
// 컴포넌트 (즉, JSX 뽑기)

function App() {
  return (
    <>
      <div className="wrap">
        <Layout>
          <Main />
        </Layout>
      </div>
    </>
  );
}

export default App;
