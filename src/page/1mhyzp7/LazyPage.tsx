import React, { lazy, Suspense } from 'react';

const Page1mhyzp7 = lazy(() => import('./Page'));

const LazyPage1mhyzp7 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mhyzp7 />
  </Suspense>
);

export { LazyPage1mhyzp7 };
