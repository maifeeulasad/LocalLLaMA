import React, { lazy, Suspense } from 'react';

const Page1mfk3y2 = lazy(() => import('./Page'));

const LazyPage1mfk3y2 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mfk3y2 />
  </Suspense>
);

export { LazyPage1mfk3y2 };
