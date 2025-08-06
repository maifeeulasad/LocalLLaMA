import React, { lazy, Suspense } from 'react';

const Page1mj19cq = lazy(() => import('./Page'));

const LazyPage1mj19cq = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mj19cq />
  </Suspense>
);

export { LazyPage1mj19cq };
