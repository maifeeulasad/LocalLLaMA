import React, { lazy, Suspense } from 'react';

const Page1lpa4rc = lazy(() => import('./Page'));

const LazyPage1lpa4rc = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lpa4rc />
  </Suspense>
);

export { LazyPage1lpa4rc };
