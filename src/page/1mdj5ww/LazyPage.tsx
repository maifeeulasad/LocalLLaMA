import React, { lazy, Suspense } from 'react';

const Page1mdj5ww = lazy(() => import('./Page'));

const LazyPage1mdj5ww = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mdj5ww />
  </Suspense>
);

export { LazyPage1mdj5ww };
