import React, { lazy, Suspense } from 'react';

const Page1me9pro = lazy(() => import('./Page'));

const LazyPage1me9pro = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1me9pro />
  </Suspense>
);

export { LazyPage1me9pro };
