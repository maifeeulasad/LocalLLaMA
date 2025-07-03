import React, { lazy, Suspense } from 'react';

const Page1lppz8x = lazy(() => import('./Page'));

const LazyPage1lppz8x = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lppz8x />
  </Suspense>
);

export { LazyPage1lppz8x };
