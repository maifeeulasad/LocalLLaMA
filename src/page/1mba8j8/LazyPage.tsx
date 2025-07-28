import React, { lazy, Suspense } from 'react';

const Page1mba8j8 = lazy(() => import('./Page'));

const LazyPage1mba8j8 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mba8j8 />
  </Suspense>
);

export { LazyPage1mba8j8 };
