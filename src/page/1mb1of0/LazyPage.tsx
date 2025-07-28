import React, { lazy, Suspense } from 'react';

const Page1mb1of0 = lazy(() => import('./Page'));

const LazyPage1mb1of0 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mb1of0 />
  </Suspense>
);

export { LazyPage1mb1of0 };
