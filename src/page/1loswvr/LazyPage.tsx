import React, { lazy, Suspense } from 'react';

const Page1loswvr = lazy(() => import('./Page'));

const LazyPage1loswvr = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1loswvr />
  </Suspense>
);

export { LazyPage1loswvr };
