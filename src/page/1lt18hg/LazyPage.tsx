import React, { lazy, Suspense } from 'react';

const Page1lt18hg = lazy(() => import('./Page'));

const LazyPage1lt18hg = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lt18hg />
  </Suspense>
);

export { LazyPage1lt18hg };
