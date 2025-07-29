import React, { lazy, Suspense } from 'react';

const Page1mc4y83 = lazy(() => import('./Page'));

const LazyPage1mc4y83 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mc4y83 />
  </Suspense>
);

export { LazyPage1mc4y83 };
