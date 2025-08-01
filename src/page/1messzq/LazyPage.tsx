import React, { lazy, Suspense } from 'react';

const Page1messzq = lazy(() => import('./Page'));

const LazyPage1messzq = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1messzq />
  </Suspense>
);

export { LazyPage1messzq };
