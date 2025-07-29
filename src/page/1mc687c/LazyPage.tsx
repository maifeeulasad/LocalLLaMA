import React, { lazy, Suspense } from 'react';

const Page1mc687c = lazy(() => import('./Page'));

const LazyPage1mc687c = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mc687c />
  </Suspense>
);

export { LazyPage1mc687c };
