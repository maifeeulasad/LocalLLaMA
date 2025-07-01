import React, { lazy, Suspense } from 'react';

const Page1lobzkr = lazy(() => import('./Page'));

const LazyPage1lobzkr = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lobzkr />
  </Suspense>
);

export { LazyPage1lobzkr };
