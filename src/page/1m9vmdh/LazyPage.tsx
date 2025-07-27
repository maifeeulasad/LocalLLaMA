import React, { lazy, Suspense } from 'react';

const Page1m9vmdh = lazy(() => import('./Page'));

const LazyPage1m9vmdh = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m9vmdh />
  </Suspense>
);

export { LazyPage1m9vmdh };
