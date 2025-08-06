import React, { lazy, Suspense } from 'react';

const Page1miv8ww = lazy(() => import('./Page'));

const LazyPage1miv8ww = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1miv8ww />
  </Suspense>
);

export { LazyPage1miv8ww };
