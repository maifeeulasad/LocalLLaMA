import React, { lazy, Suspense } from 'react';

const Page1luahr3 = lazy(() => import('./Page'));

const LazyPage1luahr3 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1luahr3 />
  </Suspense>
);

export { LazyPage1luahr3 };
