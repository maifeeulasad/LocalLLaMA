import React, { lazy, Suspense } from 'react';

const Page1mc8i36 = lazy(() => import('./Page'));

const LazyPage1mc8i36 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mc8i36 />
  </Suspense>
);

export { LazyPage1mc8i36 };
