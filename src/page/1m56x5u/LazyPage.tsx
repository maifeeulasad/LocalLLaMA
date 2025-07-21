import React, { lazy, Suspense } from 'react';

const Page1m56x5u = lazy(() => import('./Page'));

const LazyPage1m56x5u = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m56x5u />
  </Suspense>
);

export { LazyPage1m56x5u };
