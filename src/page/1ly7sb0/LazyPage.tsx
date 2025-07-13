import React, { lazy, Suspense } from 'react';

const Page1ly7sb0 = lazy(() => import('./Page'));

const LazyPage1ly7sb0 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1ly7sb0 />
  </Suspense>
);

export { LazyPage1ly7sb0 };
