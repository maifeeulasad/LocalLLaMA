import React, { lazy, Suspense } from 'react';

const Page1mip775 = lazy(() => import('./Page'));

const LazyPage1mip775 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mip775 />
  </Suspense>
);

export { LazyPage1mip775 };
