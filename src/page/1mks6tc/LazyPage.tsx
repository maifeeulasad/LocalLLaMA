import React, { lazy, Suspense } from 'react';

const Page1mks6tc = lazy(() => import('./Page'));

const LazyPage1mks6tc = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mks6tc />
  </Suspense>
);

export { LazyPage1mks6tc };
