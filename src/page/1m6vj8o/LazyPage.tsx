import React, { lazy, Suspense } from 'react';

const Page1m6vj8o = lazy(() => import('./Page'));

const LazyPage1m6vj8o = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m6vj8o />
  </Suspense>
);

export { LazyPage1m6vj8o };
