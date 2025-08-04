import React, { lazy, Suspense } from 'react';

const Page1mgkpm6 = lazy(() => import('./Page'));

const LazyPage1mgkpm6 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mgkpm6 />
  </Suspense>
);

export { LazyPage1mgkpm6 };
