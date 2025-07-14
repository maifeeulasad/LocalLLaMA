import React, { lazy, Suspense } from 'react';

const Page1lzggo2 = lazy(() => import('./Page'));

const LazyPage1lzggo2 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lzggo2 />
  </Suspense>
);

export { LazyPage1lzggo2 };
