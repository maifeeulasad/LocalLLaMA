const fs = require('fs');
const path = require('path');

const dumpDir = path.join(__dirname, './src/dump');
const appFile = path.join(__dirname, './src/App.tsx');

const files = fs.readdirSync(dumpDir);

let importStatements = '';
let routeStatements = '';

files.forEach(file => {
  const filePath = path.join(dumpDir, file);
  if (fs.statSync(filePath).isDirectory()) {
    const indexFilePath = path.join(filePath, 'index.json');
    if (fs.existsSync(indexFilePath)) {
      const varName = `data${file}`;
      importStatements += `import ${varName} from './dump/${file}/index.json';\n`;
      routeStatements += `          <Route path="/${file}" element={<RedditPostRenderer data={${varName}} />} />\n`;
    }
  }
});

const generatedBlock = `
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

const newContent = appContent.replace(
  /\/\/ replace start---mua--localllama[\s\S]*?\/\/ replace end---mua--localllama/,
  generatedBlock.trim()
);

fs.writeFileSync(appFile, newContent, 'utf8');

console.log('✅ Updated src/App.tsx with new Reddit post imports & routes!');
