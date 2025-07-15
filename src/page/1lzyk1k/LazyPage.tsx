import React, { lazy, Suspense } from 'react';

const Page1lzyk1k = lazy(() => import('./Page'));

const LazyPage1lzyk1k = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lzyk1k />
  </Suspense>
);

export { LazyPage1lzyk1k };
