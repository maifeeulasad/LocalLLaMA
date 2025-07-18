import React, { lazy, Suspense } from 'react';

const Page1m1i922 = lazy(() => import('./Page'));

const LazyPage1m1i922 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m1i922 />
  </Suspense>
);

export { LazyPage1m1i922 };
