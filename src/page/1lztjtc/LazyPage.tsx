import React, { lazy, Suspense } from 'react';

const Page1lztjtc = lazy(() => import('./Page'));

const LazyPage1lztjtc = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lztjtc />
  </Suspense>
);

export { LazyPage1lztjtc };
