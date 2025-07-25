import React, { lazy, Suspense } from 'react';

const Page1m8cn00 = lazy(() => import('./Page'));

const LazyPage1m8cn00 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m8cn00 />
  </Suspense>
);

export { LazyPage1m8cn00 };
