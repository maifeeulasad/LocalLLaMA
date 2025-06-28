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

const App = () => (
  <ConfigProvider locale={enUS}>
    <BrowserRouter basename="/LocalLLaMA">
      <CustomLayout>
        <Routes>
          <Route path="/landing" element={<LazyLanding />} />
          <Route path="/1llhdoq" element={<RedditPostRenderer data={data1llhdoq} />} />
          <Route
            path="*"
            element={<Navigate to="/landing" replace />}
          />
        </Routes>
      </CustomLayout>
    </BrowserRouter>
  </ConfigProvider>
);


// replace end---mua--localllama

// eslint-disable-next-line import/no-default-export
export default App;
