import React, { lazy, Suspense } from 'react';

const Page1kzsa70 = lazy(() => import('./Page'));

const LazyPage1kzsa70 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1kzsa70 />
  </Suspense>
);

export { LazyPage1kzsa70 };
