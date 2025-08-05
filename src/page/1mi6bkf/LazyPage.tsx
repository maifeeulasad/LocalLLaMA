import React, { lazy, Suspense } from 'react';

const Page1mi6bkf = lazy(() => import('./Page'));

const LazyPage1mi6bkf = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mi6bkf />
  </Suspense>
);

export { LazyPage1mi6bkf };
