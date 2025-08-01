import React, { lazy, Suspense } from 'react';

const Page1me3hy7 = lazy(() => import('./Page'));

const LazyPage1me3hy7 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1me3hy7 />
  </Suspense>
);

export { LazyPage1me3hy7 };
