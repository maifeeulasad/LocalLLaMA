import React, { lazy, Suspense } from 'react';

const Page1mdlss2 = lazy(() => import('./Page'));

const LazyPage1mdlss2 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mdlss2 />
  </Suspense>
);

export { LazyPage1mdlss2 };
