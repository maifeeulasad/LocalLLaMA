import React, { lazy, Suspense } from 'react';

const Page1miuzhi = lazy(() => import('./Page'));

const LazyPage1miuzhi = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1miuzhi />
  </Suspense>
);

export { LazyPage1miuzhi };
