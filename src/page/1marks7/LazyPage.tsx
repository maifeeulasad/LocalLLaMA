import React, { lazy, Suspense } from 'react';

const Page1marks7 = lazy(() => import('./Page'));

const LazyPage1marks7 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1marks7 />
  </Suspense>
);

export { LazyPage1marks7 };
