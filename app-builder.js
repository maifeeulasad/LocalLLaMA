const fs = require('fs');
const path = require('path');

const dumpDir = path.join(__dirname, './src/dump');
const appFile = path.join(__dirname, './src/App.tsx');
const layoutFile = path.join(__dirname, './src/layout/CustomLayout.tsx');

const files = fs.readdirSync(dumpDir);

let importStatements = '';
let routeStatements = '';
let menuItems = [];

files.forEach(file => {
  const filePath = path.join(dumpDir, file);
  if (fs.statSync(filePath).isDirectory()) {
    const indexFilePath = path.join(filePath, 'index.json');
    if (fs.existsSync(indexFilePath)) {
      const varName = `data${file}`;
      importStatements += `import ${varName} from './dump/${file}/index.json';\n`;
      routeStatements += `          <Route path="/${file}" element={<RedditPostRenderer data={${varName}} />} />\n`;

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
