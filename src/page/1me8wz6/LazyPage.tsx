import React, { lazy, Suspense } from 'react';

const Page1me8wz6 = lazy(() => import('./Page'));

const LazyPage1me8wz6 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1me8wz6 />
  </Suspense>
);

export { LazyPage1me8wz6 };
