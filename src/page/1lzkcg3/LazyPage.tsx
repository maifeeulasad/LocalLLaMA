import React, { lazy, Suspense } from 'react';

const Page1lzkcg3 = lazy(() => import('./Page'));

const LazyPage1lzkcg3 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lzkcg3 />
  </Suspense>
);

export { LazyPage1lzkcg3 };
