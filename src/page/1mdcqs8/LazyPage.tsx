import React, { lazy, Suspense } from 'react';

const Page1mdcqs8 = lazy(() => import('./Page'));

const LazyPage1mdcqs8 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mdcqs8 />
  </Suspense>
);

export { LazyPage1mdcqs8 };
