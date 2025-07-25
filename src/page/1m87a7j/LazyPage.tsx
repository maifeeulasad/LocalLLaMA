import React, { lazy, Suspense } from 'react';

const Page1m87a7j = lazy(() => import('./Page'));

const LazyPage1m87a7j = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m87a7j />
  </Suspense>
);

export { LazyPage1m87a7j };
