import React, { lazy, Suspense } from 'react';

const Page1m14a9j = lazy(() => import('./Page'));

const LazyPage1m14a9j = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m14a9j />
  </Suspense>
);

export { LazyPage1m14a9j };
