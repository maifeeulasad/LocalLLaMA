import React, { lazy, Suspense } from 'react';

const Page1lyw5u2 = lazy(() => import('./Page'));

const LazyPage1lyw5u2 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lyw5u2 />
  </Suspense>
);

export { LazyPage1lyw5u2 };
