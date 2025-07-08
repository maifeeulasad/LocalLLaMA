import React, { lazy, Suspense } from 'react';

const Page1lueziv = lazy(() => import('./Page'));

const LazyPage1lueziv = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lueziv />
  </Suspense>
);

export { LazyPage1lueziv };
