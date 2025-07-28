import React, { lazy, Suspense } from 'react';

const Page1mbdg53 = lazy(() => import('./Page'));

const LazyPage1mbdg53 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mbdg53 />
  </Suspense>
);

export { LazyPage1mbdg53 };
