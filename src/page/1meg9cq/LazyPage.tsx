import React, { lazy, Suspense } from 'react';

const Page1meg9cq = lazy(() => import('./Page'));

const LazyPage1meg9cq = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1meg9cq />
  </Suspense>
);

export { LazyPage1meg9cq };
