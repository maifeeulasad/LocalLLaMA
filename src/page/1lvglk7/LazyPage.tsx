import React, { lazy, Suspense } from 'react';

const Page1lvglk7 = lazy(() => import('./Page'));

const LazyPage1lvglk7 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lvglk7 />
  </Suspense>
);

export { LazyPage1lvglk7 };
