import React, { lazy, Suspense } from 'react';

const Page1mcpxr4 = lazy(() => import('./Page'));

const LazyPage1mcpxr4 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mcpxr4 />
  </Suspense>
);

export { LazyPage1mcpxr4 };
