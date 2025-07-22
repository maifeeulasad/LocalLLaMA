import React, { lazy, Suspense } from 'react';

const Page1m650ow = lazy(() => import('./Page'));

const LazyPage1m650ow = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m650ow />
  </Suspense>
);

export { LazyPage1m650ow };
