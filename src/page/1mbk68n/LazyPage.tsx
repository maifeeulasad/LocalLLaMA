import React, { lazy, Suspense } from 'react';

const Page1mbk68n = lazy(() => import('./Page'));

const LazyPage1mbk68n = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mbk68n />
  </Suspense>
);

export { LazyPage1mbk68n };
