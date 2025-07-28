import React, { lazy, Suspense } from 'react';

const Page1mbavi1 = lazy(() => import('./Page'));

const LazyPage1mbavi1 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mbavi1 />
  </Suspense>
);

export { LazyPage1mbavi1 };
