import React, { lazy, Suspense } from 'react';

const Page1m9ia1t = lazy(() => import('./Page'));

const LazyPage1m9ia1t = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m9ia1t />
  </Suspense>
);

export { LazyPage1m9ia1t };
