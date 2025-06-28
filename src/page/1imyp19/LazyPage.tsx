import React, { lazy, Suspense } from 'react';

const Page1imyp19 = lazy(() => import('./Page'));

const LazyPage1imyp19 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1imyp19 />
  </Suspense>
);

export { LazyPage1imyp19 };
