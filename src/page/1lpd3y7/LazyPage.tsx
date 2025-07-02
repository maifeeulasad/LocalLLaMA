import React, { lazy, Suspense } from 'react';

const Page1lpd3y7 = lazy(() => import('./Page'));

const LazyPage1lpd3y7 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lpd3y7 />
  </Suspense>
);

export { LazyPage1lpd3y7 };
