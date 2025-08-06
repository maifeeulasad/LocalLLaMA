import React, { lazy, Suspense } from 'react';

const Page1mizar6 = lazy(() => import('./Page'));

const LazyPage1mizar6 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mizar6 />
  </Suspense>
);

export { LazyPage1mizar6 };
