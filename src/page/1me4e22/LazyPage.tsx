import React, { lazy, Suspense } from 'react';

const Page1me4e22 = lazy(() => import('./Page'));

const LazyPage1me4e22 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1me4e22 />
  </Suspense>
);

export { LazyPage1me4e22 };
