import React, { lazy, Suspense } from 'react';

const Page1mbdm6t = lazy(() => import('./Page'));

const LazyPage1mbdm6t = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mbdm6t />
  </Suspense>
);

export { LazyPage1mbdm6t };
