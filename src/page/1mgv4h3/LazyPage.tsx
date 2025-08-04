import React, { lazy, Suspense } from 'react';

const Page1mgv4h3 = lazy(() => import('./Page'));

const LazyPage1mgv4h3 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mgv4h3 />
  </Suspense>
);

export { LazyPage1mgv4h3 };
