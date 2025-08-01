import React, { lazy, Suspense } from 'react';

const Page1me4riw = lazy(() => import('./Page'));

const LazyPage1me4riw = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1me4riw />
  </Suspense>
);

export { LazyPage1me4riw };
