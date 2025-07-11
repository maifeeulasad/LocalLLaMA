import React, { lazy, Suspense } from 'react';

const Page1lwf1t6 = lazy(() => import('./Page'));

const LazyPage1lwf1t6 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lwf1t6 />
  </Suspense>
);

export { LazyPage1lwf1t6 };
