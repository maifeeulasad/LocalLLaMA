import React, { lazy, Suspense } from 'react';

const Page1m70ra1 = lazy(() => import('./Page'));

const LazyPage1m70ra1 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m70ra1 />
  </Suspense>
);

export { LazyPage1m70ra1 };
