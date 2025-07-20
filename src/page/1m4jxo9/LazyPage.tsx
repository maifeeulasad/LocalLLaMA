import React, { lazy, Suspense } from 'react';

const Page1m4jxo9 = lazy(() => import('./Page'));

const LazyPage1m4jxo9 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m4jxo9 />
  </Suspense>
);

export { LazyPage1m4jxo9 };
