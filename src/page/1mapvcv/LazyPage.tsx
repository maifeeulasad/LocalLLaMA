import React, { lazy, Suspense } from 'react';

const Page1mapvcv = lazy(() => import('./Page'));

const LazyPage1mapvcv = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mapvcv />
  </Suspense>
);

export { LazyPage1mapvcv };
