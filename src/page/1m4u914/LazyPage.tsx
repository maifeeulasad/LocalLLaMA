import React, { lazy, Suspense } from 'react';

const Page1m4u914 = lazy(() => import('./Page'));

const LazyPage1m4u914 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m4u914 />
  </Suspense>
);

export { LazyPage1m4u914 };
