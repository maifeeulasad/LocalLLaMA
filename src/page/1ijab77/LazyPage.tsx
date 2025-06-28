import React, { lazy, Suspense } from 'react';

const Page1ijab77 = lazy(() => import('./Page'));

const LazyPage1ijab77 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1ijab77 />
  </Suspense>
);

export { LazyPage1ijab77 };
