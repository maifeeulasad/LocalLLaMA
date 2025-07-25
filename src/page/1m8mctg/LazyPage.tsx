import React, { lazy, Suspense } from 'react';

const Page1m8mctg = lazy(() => import('./Page'));

const LazyPage1m8mctg = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m8mctg />
  </Suspense>
);

export { LazyPage1m8mctg };
