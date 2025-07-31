import React, { lazy, Suspense } from 'react';

const Page1mdnhb1 = lazy(() => import('./Page'));

const LazyPage1mdnhb1 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mdnhb1 />
  </Suspense>
);

export { LazyPage1mdnhb1 };
