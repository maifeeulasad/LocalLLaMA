import React, { lazy, Suspense } from 'react';

const Page1mix2kg = lazy(() => import('./Page'));

const LazyPage1mix2kg = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mix2kg />
  </Suspense>
);

export { LazyPage1mix2kg };
