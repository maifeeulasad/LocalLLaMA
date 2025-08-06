import React, { lazy, Suspense } from 'react';

const Page1miz2wd = lazy(() => import('./Page'));

const LazyPage1miz2wd = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1miz2wd />
  </Suspense>
);

export { LazyPage1miz2wd };
