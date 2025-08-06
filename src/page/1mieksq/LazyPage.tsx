import React, { lazy, Suspense } from 'react';

const Page1mieksq = lazy(() => import('./Page'));

const LazyPage1mieksq = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mieksq />
  </Suspense>
);

export { LazyPage1mieksq };
