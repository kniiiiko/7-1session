import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import Main from "./pages/Main.jsx"; //경로를 적어주세요
import Read from "./pages/Read.jsx"; //경로를 적어주세요
import Write from "./pages/Write.jsx"; //경로를 적어주세요
import data from "./data.json"; //경로를 적어주세요

function App() {
  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    setDataList(data);
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main dataList={dataList} />} />
        <Route path="/read/:postId" element={<Read dataList={dataList} />} />
        <Route path="/write" element={<Write />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
