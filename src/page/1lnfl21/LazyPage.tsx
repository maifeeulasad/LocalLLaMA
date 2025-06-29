import React, { lazy, Suspense } from 'react';

const Page1lnfl21 = lazy(() => import('./Page'));

const LazyPage1lnfl21 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lnfl21 />
  </Suspense>
);

export { LazyPage1lnfl21 };
