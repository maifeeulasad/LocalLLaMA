import React, { lazy, Suspense } from 'react';

const Page1mdwh31 = lazy(() => import('./Page'));

const LazyPage1mdwh31 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mdwh31 />
  </Suspense>
);

export { LazyPage1mdwh31 };
