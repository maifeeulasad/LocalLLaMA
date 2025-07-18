import React, { lazy, Suspense } from 'react';

const Page1m2i0cn = lazy(() => import('./Page'));

const LazyPage1m2i0cn = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m2i0cn />
  </Suspense>
);

export { LazyPage1m2i0cn };
