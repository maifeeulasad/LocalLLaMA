import React, { lazy, Suspense } from 'react';

const Page1mkmf65 = lazy(() => import('./Page'));

const LazyPage1mkmf65 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mkmf65 />
  </Suspense>
);

export { LazyPage1mkmf65 };
