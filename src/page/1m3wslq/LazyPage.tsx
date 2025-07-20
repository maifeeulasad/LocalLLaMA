import React, { lazy, Suspense } from 'react';

const Page1m3wslq = lazy(() => import('./Page'));

const LazyPage1m3wslq = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m3wslq />
  </Suspense>
);

export { LazyPage1m3wslq };
