import React, { lazy, Suspense } from 'react';

const Page1mha439 = lazy(() => import('./Page'));

const LazyPage1mha439 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mha439 />
  </Suspense>
);

export { LazyPage1mha439 };
