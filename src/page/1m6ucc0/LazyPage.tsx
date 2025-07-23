import React, { lazy, Suspense } from 'react';

const Page1m6ucc0 = lazy(() => import('./Page'));

const LazyPage1m6ucc0 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m6ucc0 />
  </Suspense>
);

export { LazyPage1m6ucc0 };
