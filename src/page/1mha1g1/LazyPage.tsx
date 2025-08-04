import React, { lazy, Suspense } from 'react';

const Page1mha1g1 = lazy(() => import('./Page'));

const LazyPage1mha1g1 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mha1g1 />
  </Suspense>
);

export { LazyPage1mha1g1 };
