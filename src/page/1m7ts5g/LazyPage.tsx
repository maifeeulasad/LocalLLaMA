import React, { lazy, Suspense } from 'react';

const Page1m7ts5g = lazy(() => import('./Page'));

const LazyPage1m7ts5g = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m7ts5g />
  </Suspense>
);

export { LazyPage1m7ts5g };
