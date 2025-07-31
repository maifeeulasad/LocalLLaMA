import React, { lazy, Suspense } from 'react';

const Page1mdchc1 = lazy(() => import('./Page'));

const LazyPage1mdchc1 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mdchc1 />
  </Suspense>
);

export { LazyPage1mdchc1 };
