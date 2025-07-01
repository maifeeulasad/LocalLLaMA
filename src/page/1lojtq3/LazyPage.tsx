import React, { lazy, Suspense } from 'react';

const Page1lojtq3 = lazy(() => import('./Page'));

const LazyPage1lojtq3 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lojtq3 />
  </Suspense>
);

export { LazyPage1lojtq3 };
