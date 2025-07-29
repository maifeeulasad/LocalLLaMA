import React, { lazy, Suspense } from 'react';

const Page1mc5gv1 = lazy(() => import('./Page'));

const LazyPage1mc5gv1 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mc5gv1 />
  </Suspense>
);

export { LazyPage1mc5gv1 };
