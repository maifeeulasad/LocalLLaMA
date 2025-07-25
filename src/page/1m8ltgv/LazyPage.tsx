import React, { lazy, Suspense } from 'react';

const Page1m8ltgv = lazy(() => import('./Page'));

const LazyPage1m8ltgv = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m8ltgv />
  </Suspense>
);

export { LazyPage1m8ltgv };
