import React, { lazy, Suspense } from 'react';

const Page1lnfdch = lazy(() => import('./Page'));

const LazyPage1lnfdch = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lnfdch />
  </Suspense>
);

export { LazyPage1lnfdch };
