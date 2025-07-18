import React, { lazy, Suspense } from 'react';

const Page1m31moj = lazy(() => import('./Page'));

const LazyPage1m31moj = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m31moj />
  </Suspense>
);

export { LazyPage1m31moj };
