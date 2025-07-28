import React, { lazy, Suspense } from 'react';

const Page1mb15g2 = lazy(() => import('./Page'));

const LazyPage1mb15g2 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mb15g2 />
  </Suspense>
);

export { LazyPage1mb15g2 };
