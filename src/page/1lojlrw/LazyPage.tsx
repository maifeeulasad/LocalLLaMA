import React, { lazy, Suspense } from 'react';

const Page1lojlrw = lazy(() => import('./Page'));

const LazyPage1lojlrw = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lojlrw />
  </Suspense>
);

export { LazyPage1lojlrw };
