import React, { lazy, Suspense } from 'react';

const Page1mkngs6 = lazy(() => import('./Page'));

const LazyPage1mkngs6 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mkngs6 />
  </Suspense>
);

export { LazyPage1mkngs6 };
