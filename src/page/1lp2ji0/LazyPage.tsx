import React, { lazy, Suspense } from 'react';

const Page1lp2ji0 = lazy(() => import('./Page'));

const LazyPage1lp2ji0 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lp2ji0 />
  </Suspense>
);

export { LazyPage1lp2ji0 };
