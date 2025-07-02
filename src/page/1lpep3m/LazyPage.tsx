import React, { lazy, Suspense } from 'react';

const Page1lpep3m = lazy(() => import('./Page'));

const LazyPage1lpep3m = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lpep3m />
  </Suspense>
);

export { LazyPage1lpep3m };
