import React, { lazy, Suspense } from 'react';

const Page1m39eyr = lazy(() => import('./Page'));

const LazyPage1m39eyr = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m39eyr />
  </Suspense>
);

export { LazyPage1m39eyr };
