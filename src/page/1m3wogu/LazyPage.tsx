import React, { lazy, Suspense } from 'react';

const Page1m3wogu = lazy(() => import('./Page'));

const LazyPage1m3wogu = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m3wogu />
  </Suspense>
);

export { LazyPage1m3wogu };
