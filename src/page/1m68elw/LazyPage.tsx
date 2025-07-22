import React, { lazy, Suspense } from 'react';

const Page1m68elw = lazy(() => import('./Page'));

const LazyPage1m68elw = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m68elw />
  </Suspense>
);

export { LazyPage1m68elw };
