import React, { lazy, Suspense } from 'react';

const Page1m00yn1 = lazy(() => import('./Page'));

const LazyPage1m00yn1 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m00yn1 />
  </Suspense>
);

export { LazyPage1m00yn1 };
