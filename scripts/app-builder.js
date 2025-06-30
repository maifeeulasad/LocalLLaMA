const fs = require('fs');
const path = require('path');

const dumpDir = path.join(__dirname, '../src/dump');
const pageBaseDir = path.join(__dirname, '../src/page');
const appFile = path.join(__dirname, '../src/App.tsx');
const layoutFile = path.join(__dirname, '../src/layout/CustomLayout.tsx');

const files = fs.readdirSync(dumpDir);

let importStatements = '';
let routeStatements = '';
let menuItems = [];

files.forEach(file => {
  const dumpPath = path.join(dumpDir, file);
  const pagePath = path.join(pageBaseDir, file);

  if (fs.statSync(dumpPath).isDirectory()) {
    const indexFilePath = path.join(dumpPath, 'index.json');
    if (fs.existsSync(indexFilePath)) {
      // Make sure page/{postId} exists
      fs.mkdirSync(pagePath, { recursive: true });

      const pageJsonPath = path.join(pagePath, 'index.json');
      fs.copyFileSync(indexFilePath, pageJsonPath);

      const pageContent = `// @ts-nocheck
import React from 'react';
import RedditPostRenderer from '../../component/reddit/RedditPostRenderer';
import data${file} from './index.json';

const Page${file} = () => (
  <RedditPostRenderer data={data${file}} />
);

// eslint-disable-next-line import/no-default-export
export default Page${file};
`;

      fs.writeFileSync(path.join(pagePath, 'Page.tsx'), pageContent, 'utf8');

      const lazyPageContent = `import React, { lazy, Suspense } from 'react';

const Page${file} = lazy(() => import('./Page'));

const LazyPage${file} = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page${file} />
  </Suspense>
);

export { LazyPage${file} };
`;

      fs.writeFileSync(path.join(pagePath, 'LazyPage.tsx'), lazyPageContent, 'utf8');

      importStatements += `import { LazyPage${file} } from './page/${file}/LazyPage';\n`;
      routeStatements += `          <Route path="/${file}" element={<LazyPage${file} />} />\n`;

      const postData = JSON.parse(fs.readFileSync(indexFilePath, 'utf8'));
      const postTitle = postData[0]?.data?.children?.[0]?.data?.title || `Post ${file}`;

      menuItems.push(`      {
        path: '/${file}',
        name: '${postTitle.replace(/'/g, "\\'")}',
      },`);
    }
  }
});

const appGeneratedBlock = `
// replace start---mua--localllama

${importStatements}

const App = () => (
  <ConfigProvider locale={enUS}>
    <BrowserRouter basename="/LocalLLaMA">
      <CustomLayout>
        <Routes>
          <Route path="/landing" element={<LazyLanding />} />
${routeStatements}          <Route path="*" element={<Navigate to="/landing" replace />} />
        </Routes>
      </CustomLayout>
    </BrowserRouter>
  </ConfigProvider>
);

// replace end---mua--localllama
`;

const appContent = fs.readFileSync(appFile, 'utf8');

const newAppContent = appContent.replace(
  /\/\/ replace start---mua--localllama[\s\S]*?\/\/ replace end---mua--localllama/,
  appGeneratedBlock.trim()
);

fs.writeFileSync(appFile, newAppContent, 'utf8');
console.log('✅ Updated src/App.tsx!');

const menuBlock = `
// replace start---mua--localllama

const defaultMenus: MenuDataItem[] = [
  {
    path: '/',
    name: 'Pages',
    children: [
${menuItems.join('\n')}
    ],
  },
  {
    path: '/landing',
    name: 'Landing Page',
  },
];

// replace end---mua--localllama
`;

const layoutContent = fs.readFileSync(layoutFile, 'utf8');

const newLayoutContent = layoutContent.replace(
  /\/\/ replace start---mua--localllama[\s\S]*?\/\/ replace end---mua--localllama/,
  menuBlock.trim()
);

fs.writeFileSync(layoutFile, newLayoutContent, 'utf8');
console.log('✅ Updated src/layout/CustomLayout.tsx!');
