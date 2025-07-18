import React, { lazy, Suspense } from 'react';

const Page1m1ylw0 = lazy(() => import('./Page'));

const LazyPage1m1ylw0 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m1ylw0 />
  </Suspense>
);

export { LazyPage1m1ylw0 };
