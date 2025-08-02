import React, { lazy, Suspense } from 'react';

const Page1mfor6n = lazy(() => import('./Page'));

const LazyPage1mfor6n = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mfor6n />
  </Suspense>
);

export { LazyPage1mfor6n };
