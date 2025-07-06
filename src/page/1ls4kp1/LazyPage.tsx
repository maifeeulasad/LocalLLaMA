import React, { lazy, Suspense } from 'react';

const Page1ls4kp1 = lazy(() => import('./Page'));

const LazyPage1ls4kp1 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1ls4kp1 />
  </Suspense>
);

export { LazyPage1ls4kp1 };
