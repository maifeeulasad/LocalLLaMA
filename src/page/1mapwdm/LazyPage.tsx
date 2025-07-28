import React, { lazy, Suspense } from 'react';

const Page1mapwdm = lazy(() => import('./Page'));

const LazyPage1mapwdm = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mapwdm />
  </Suspense>
);

export { LazyPage1mapwdm };
