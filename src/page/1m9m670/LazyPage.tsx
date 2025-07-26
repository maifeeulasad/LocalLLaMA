import React, { lazy, Suspense } from 'react';

const Page1m9m670 = lazy(() => import('./Page'));

const LazyPage1m9m670 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m9m670 />
  </Suspense>
);

export { LazyPage1m9m670 };
