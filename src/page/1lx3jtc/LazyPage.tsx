import React, { lazy, Suspense } from 'react';

const Page1lx3jtc = lazy(() => import('./Page'));

const LazyPage1lx3jtc = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lx3jtc />
  </Suspense>
);

export { LazyPage1lx3jtc };
