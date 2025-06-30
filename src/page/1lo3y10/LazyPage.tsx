import React, { lazy, Suspense } from 'react';

const Page1lo3y10 = lazy(() => import('./Page'));

const LazyPage1lo3y10 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lo3y10 />
  </Suspense>
);

export { LazyPage1lo3y10 };
