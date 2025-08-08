import React, { lazy, Suspense } from 'react';

const Page1mko9fw = lazy(() => import('./Page'));

const LazyPage1mko9fw = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mko9fw />
  </Suspense>
);

export { LazyPage1mko9fw };
