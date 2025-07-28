import React, { lazy, Suspense } from 'react';

const Page1mbc9d3 = lazy(() => import('./Page'));

const LazyPage1mbc9d3 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mbc9d3 />
  </Suspense>
);

export { LazyPage1mbc9d3 };
