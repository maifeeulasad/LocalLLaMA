import React, { lazy, Suspense } from 'react';

const Page1lnin1x = lazy(() => import('./Page'));

const LazyPage1lnin1x = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lnin1x />
  </Suspense>
);

export { LazyPage1lnin1x };
