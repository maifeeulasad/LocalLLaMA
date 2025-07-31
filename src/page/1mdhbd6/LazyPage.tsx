import React, { lazy, Suspense } from 'react';

const Page1mdhbd6 = lazy(() => import('./Page'));

const LazyPage1mdhbd6 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mdhbd6 />
  </Suspense>
);

export { LazyPage1mdhbd6 };
