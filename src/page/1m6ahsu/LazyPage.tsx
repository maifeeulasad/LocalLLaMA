import React, { lazy, Suspense } from 'react';

const Page1m6ahsu = lazy(() => import('./Page'));

const LazyPage1m6ahsu = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m6ahsu />
  </Suspense>
);

export { LazyPage1m6ahsu };
