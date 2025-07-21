import React, { lazy, Suspense } from 'react';

const Page1m4rbqv = lazy(() => import('./Page'));

const LazyPage1m4rbqv = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m4rbqv />
  </Suspense>
);

export { LazyPage1m4rbqv };
