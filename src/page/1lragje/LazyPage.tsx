import React, { lazy, Suspense } from 'react';

const Page1lragje = lazy(() => import('./Page'));

const LazyPage1lragje = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lragje />
  </Suspense>
);

export { LazyPage1lragje };
