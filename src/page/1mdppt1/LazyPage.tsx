import React, { lazy, Suspense } from 'react';

const Page1mdppt1 = lazy(() => import('./Page'));

const LazyPage1mdppt1 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mdppt1 />
  </Suspense>
);

export { LazyPage1mdppt1 };
