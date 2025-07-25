import React, { lazy, Suspense } from 'react';

const Page1m8bps2 = lazy(() => import('./Page'));

const LazyPage1m8bps2 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m8bps2 />
  </Suspense>
);

export { LazyPage1m8bps2 };
