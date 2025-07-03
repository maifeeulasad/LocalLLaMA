import React, { lazy, Suspense } from 'react';

const Page1lpq6l0 = lazy(() => import('./Page'));

const LazyPage1lpq6l0 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lpq6l0 />
  </Suspense>
);

export { LazyPage1lpq6l0 };
