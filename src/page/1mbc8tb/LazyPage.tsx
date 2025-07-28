import React, { lazy, Suspense } from 'react';

const Page1mbc8tb = lazy(() => import('./Page'));

const LazyPage1mbc8tb = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mbc8tb />
  </Suspense>
);

export { LazyPage1mbc8tb };
