import React, { lazy, Suspense } from 'react';

const Page1mijmmg = lazy(() => import('./Page'));

const LazyPage1mijmmg = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mijmmg />
  </Suspense>
);

export { LazyPage1mijmmg };
