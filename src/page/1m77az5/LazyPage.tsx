import React, { lazy, Suspense } from 'react';

const Page1m77az5 = lazy(() => import('./Page'));

const LazyPage1m77az5 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m77az5 />
  </Suspense>
);

export { LazyPage1m77az5 };
