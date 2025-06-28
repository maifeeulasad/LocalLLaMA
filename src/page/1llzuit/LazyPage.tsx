import React, { lazy, Suspense } from 'react';

const Page1llzuit = lazy(() => import('./Page'));

const LazyPage1llzuit = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1llzuit />
  </Suspense>
);

export { LazyPage1llzuit };
