import React, { lazy, Suspense } from 'react';

const Page1mfk4hx = lazy(() => import('./Page'));

const LazyPage1mfk4hx = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mfk4hx />
  </Suspense>
);

export { LazyPage1mfk4hx };
