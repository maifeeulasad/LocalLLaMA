import React, { lazy, Suspense } from 'react';

const Page1lvcb72 = lazy(() => import('./Page'));

const LazyPage1lvcb72 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lvcb72 />
  </Suspense>
);

export { LazyPage1lvcb72 };
