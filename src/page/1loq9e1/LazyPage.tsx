import React, { lazy, Suspense } from 'react';

const Page1loq9e1 = lazy(() => import('./Page'));

const LazyPage1loq9e1 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1loq9e1 />
  </Suspense>
);

export { LazyPage1loq9e1 };
