import React, { lazy, Suspense } from 'react';

const Page1mfv3b0 = lazy(() => import('./Page'));

const LazyPage1mfv3b0 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mfv3b0 />
  </Suspense>
);

export { LazyPage1mfv3b0 };
