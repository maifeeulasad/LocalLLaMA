import React, { lazy, Suspense } from 'react';

const Page1m9vbzf = lazy(() => import('./Page'));

const LazyPage1m9vbzf = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m9vbzf />
  </Suspense>
);

export { LazyPage1m9vbzf };
