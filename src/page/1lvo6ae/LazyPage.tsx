import React, { lazy, Suspense } from 'react';

const Page1lvo6ae = lazy(() => import('./Page'));

const LazyPage1lvo6ae = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lvo6ae />
  </Suspense>
);

export { LazyPage1lvo6ae };
