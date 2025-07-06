import React, { lazy, Suspense } from 'react';

const Page1lrqptp = lazy(() => import('./Page'));

const LazyPage1lrqptp = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lrqptp />
  </Suspense>
);

export { LazyPage1lrqptp };
