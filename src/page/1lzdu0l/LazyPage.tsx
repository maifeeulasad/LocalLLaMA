import React, { lazy, Suspense } from 'react';

const Page1lzdu0l = lazy(() => import('./Page'));

const LazyPage1lzdu0l = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lzdu0l />
  </Suspense>
);

export { LazyPage1lzdu0l };
