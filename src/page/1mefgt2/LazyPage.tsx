import React, { lazy, Suspense } from 'react';

const Page1mefgt2 = lazy(() => import('./Page'));

const LazyPage1mefgt2 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mefgt2 />
  </Suspense>
);

export { LazyPage1mefgt2 };
