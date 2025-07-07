import React, { lazy, Suspense } from 'react';

const Page1ltbr1t = lazy(() => import('./Page'));

const LazyPage1ltbr1t = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1ltbr1t />
  </Suspense>
);

export { LazyPage1ltbr1t };
