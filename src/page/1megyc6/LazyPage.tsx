import React, { lazy, Suspense } from 'react';

const Page1megyc6 = lazy(() => import('./Page'));

const LazyPage1megyc6 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1megyc6 />
  </Suspense>
);

export { LazyPage1megyc6 };
