import React, { lazy, Suspense } from 'react';

const Page1m760rq = lazy(() => import('./Page'));

const LazyPage1m760rq = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m760rq />
  </Suspense>
);

export { LazyPage1m760rq };
