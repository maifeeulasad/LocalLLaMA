import React, { lazy, Suspense } from 'react';

const Page1m0g2mk = lazy(() => import('./Page'));

const LazyPage1m0g2mk = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m0g2mk />
  </Suspense>
);

export { LazyPage1m0g2mk };
