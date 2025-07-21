import React, { lazy, Suspense } from 'react';

const Page1m4r7t5 = lazy(() => import('./Page'));

const LazyPage1m4r7t5 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m4r7t5 />
  </Suspense>
);

export { LazyPage1m4r7t5 };
