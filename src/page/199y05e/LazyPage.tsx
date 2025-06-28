import React, { lazy, Suspense } from 'react';

const Page199y05e = lazy(() => import('./Page'));

const LazyPage199y05e = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page199y05e />
  </Suspense>
);

export { LazyPage199y05e };
