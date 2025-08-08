import React, { lazy, Suspense } from 'react';

const Page1mk95w6 = lazy(() => import('./Page'));

const LazyPage1mk95w6 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mk95w6 />
  </Suspense>
);

export { LazyPage1mk95w6 };
