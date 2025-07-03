import React, { lazy, Suspense } from 'react';

const Page1lpz355 = lazy(() => import('./Page'));

const LazyPage1lpz355 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lpz355 />
  </Suspense>
);

export { LazyPage1lpz355 };
