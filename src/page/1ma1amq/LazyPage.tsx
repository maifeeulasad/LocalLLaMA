import React, { lazy, Suspense } from 'react';

const Page1ma1amq = lazy(() => import('./Page'));

const LazyPage1ma1amq = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1ma1amq />
  </Suspense>
);

export { LazyPage1ma1amq };
