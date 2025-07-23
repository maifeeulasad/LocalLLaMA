import React, { lazy, Suspense } from 'react';

const Page1m6oqxw = lazy(() => import('./Page'));

const LazyPage1m6oqxw = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m6oqxw />
  </Suspense>
);

export { LazyPage1m6oqxw };
