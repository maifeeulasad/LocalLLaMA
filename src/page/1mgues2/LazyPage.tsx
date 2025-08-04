import React, { lazy, Suspense } from 'react';

const Page1mgues2 = lazy(() => import('./Page'));

const LazyPage1mgues2 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mgues2 />
  </Suspense>
);

export { LazyPage1mgues2 };
