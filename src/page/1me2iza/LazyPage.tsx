import React, { lazy, Suspense } from 'react';

const Page1me2iza = lazy(() => import('./Page'));

const LazyPage1me2iza = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1me2iza />
  </Suspense>
);

export { LazyPage1me2iza };
