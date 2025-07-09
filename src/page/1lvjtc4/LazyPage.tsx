import React, { lazy, Suspense } from 'react';

const Page1lvjtc4 = lazy(() => import('./Page'));

const LazyPage1lvjtc4 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lvjtc4 />
  </Suspense>
);

export { LazyPage1lvjtc4 };
