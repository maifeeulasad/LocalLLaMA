import React, { lazy, Suspense } from 'react';

const Page1mdn6dp = lazy(() => import('./Page'));

const LazyPage1mdn6dp = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mdn6dp />
  </Suspense>
);

export { LazyPage1mdn6dp };
