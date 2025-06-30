import React, { lazy, Suspense } from 'react';

const Page1lnxml5 = lazy(() => import('./Page'));

const LazyPage1lnxml5 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lnxml5 />
  </Suspense>
);

export { LazyPage1lnxml5 };
