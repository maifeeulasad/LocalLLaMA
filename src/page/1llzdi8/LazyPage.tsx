import React, { lazy, Suspense } from 'react';

const Page1llzdi8 = lazy(() => import('./Page'));

const LazyPage1llzdi8 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1llzdi8 />
  </Suspense>
);

export { LazyPage1llzdi8 };
