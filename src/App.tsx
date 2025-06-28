// @ts-nocheck
import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { ConfigProvider } from 'antd';
import enUS from 'antd/locale/en_US';

import { CustomLayout } from './layout/CustomLayout';
import { LazyLanding } from './component/landing/LazyLanding';
import RedditPostRenderer from './component/reddit/RedditPostRenderer';

// replace start---mua--localllama

import data1llhdoq from './dump/1llhdoq/index.json';
import data1llms46 from './dump/1llms46/index.json';
import data1llndut from './dump/1llndut/index.json';
import data1llnwy5 from './dump/1llnwy5/index.json';
import data1llqp0a from './dump/1llqp0a/index.json';
import data1llsztp from './dump/1llsztp/index.json';
import data1llwfwv from './dump/1llwfwv/index.json';
import data1llx4ky from './dump/1llx4ky/index.json';
import data1llzdi8 from './dump/1llzdi8/index.json';
import data1lm0btg from './dump/1lm0btg/index.json';
import data1lm0m6i from './dump/1lm0m6i/index.json';
import data1lm17p6 from './dump/1lm17p6/index.json';
import data1lm1v2c from './dump/1lm1v2c/index.json';
import data1lm3jvm from './dump/1lm3jvm/index.json';
import data1lm76gk from './dump/1lm76gk/index.json';
import data1lm9012 from './dump/1lm9012/index.json';
import data1lm92se from './dump/1lm92se/index.json';
import data1lm93yi from './dump/1lm93yi/index.json';
import data1lm98z7 from './dump/1lm98z7/index.json';
import data1lm9xlq from './dump/1lm9xlq/index.json';
import data1lmb5s3 from './dump/1lmb5s3/index.json';
import data1lmc6dp from './dump/1lmc6dp/index.json';
import data1lmdkbg from './dump/1lmdkbg/index.json';
import data1lmfiu9 from './dump/1lmfiu9/index.json';
import data1lmgdw1 from './dump/1lmgdw1/index.json';
import data1lmictu from './dump/1lmictu/index.json';
import data1lmix4b from './dump/1lmix4b/index.json';


const App = () => (
  <ConfigProvider locale={enUS}>
    <BrowserRouter basename="/LocalLLaMA">
      <CustomLayout>
        <Routes>
          <Route path="/landing" element={<LazyLanding />} />
          <Route path="/1llhdoq" element={<RedditPostRenderer data={data1llhdoq} />} />
          <Route path="/1llms46" element={<RedditPostRenderer data={data1llms46} />} />
          <Route path="/1llndut" element={<RedditPostRenderer data={data1llndut} />} />
          <Route path="/1llnwy5" element={<RedditPostRenderer data={data1llnwy5} />} />
          <Route path="/1llqp0a" element={<RedditPostRenderer data={data1llqp0a} />} />
          <Route path="/1llsztp" element={<RedditPostRenderer data={data1llsztp} />} />
          <Route path="/1llwfwv" element={<RedditPostRenderer data={data1llwfwv} />} />
          <Route path="/1llx4ky" element={<RedditPostRenderer data={data1llx4ky} />} />
          <Route path="/1llzdi8" element={<RedditPostRenderer data={data1llzdi8} />} />
          <Route path="/1lm0btg" element={<RedditPostRenderer data={data1lm0btg} />} />
          <Route path="/1lm0m6i" element={<RedditPostRenderer data={data1lm0m6i} />} />
          <Route path="/1lm17p6" element={<RedditPostRenderer data={data1lm17p6} />} />
          <Route path="/1lm1v2c" element={<RedditPostRenderer data={data1lm1v2c} />} />
          <Route path="/1lm3jvm" element={<RedditPostRenderer data={data1lm3jvm} />} />
          <Route path="/1lm76gk" element={<RedditPostRenderer data={data1lm76gk} />} />
          <Route path="/1lm9012" element={<RedditPostRenderer data={data1lm9012} />} />
          <Route path="/1lm92se" element={<RedditPostRenderer data={data1lm92se} />} />
          <Route path="/1lm93yi" element={<RedditPostRenderer data={data1lm93yi} />} />
          <Route path="/1lm98z7" element={<RedditPostRenderer data={data1lm98z7} />} />
          <Route path="/1lm9xlq" element={<RedditPostRenderer data={data1lm9xlq} />} />
          <Route path="/1lmb5s3" element={<RedditPostRenderer data={data1lmb5s3} />} />
          <Route path="/1lmc6dp" element={<RedditPostRenderer data={data1lmc6dp} />} />
          <Route path="/1lmdkbg" element={<RedditPostRenderer data={data1lmdkbg} />} />
          <Route path="/1lmfiu9" element={<RedditPostRenderer data={data1lmfiu9} />} />
          <Route path="/1lmgdw1" element={<RedditPostRenderer data={data1lmgdw1} />} />
          <Route path="/1lmictu" element={<RedditPostRenderer data={data1lmictu} />} />
          <Route path="/1lmix4b" element={<RedditPostRenderer data={data1lmix4b} />} />
          <Route path="*" element={<Navigate to="/landing" replace />} />
        </Routes>
      </CustomLayout>
    </BrowserRouter>
  </ConfigProvider>
);

// replace end---mua--localllama

// eslint-disable-next-line import/no-default-export
export default App;
