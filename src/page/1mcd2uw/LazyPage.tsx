import React, { lazy, Suspense } from 'react';

const Page1mcd2uw = lazy(() => import('./Page'));

const LazyPage1mcd2uw = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mcd2uw />
  </Suspense>
);

export { LazyPage1mcd2uw };
