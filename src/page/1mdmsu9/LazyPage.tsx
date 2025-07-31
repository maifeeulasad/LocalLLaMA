import React, { lazy, Suspense } from 'react';

const Page1mdmsu9 = lazy(() => import('./Page'));

const LazyPage1mdmsu9 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mdmsu9 />
  </Suspense>
);

export { LazyPage1mdmsu9 };
