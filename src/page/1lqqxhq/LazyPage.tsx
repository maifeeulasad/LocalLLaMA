import React, { lazy, Suspense } from 'react';

const Page1lqqxhq = lazy(() => import('./Page'));

const LazyPage1lqqxhq = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lqqxhq />
  </Suspense>
);

export { LazyPage1lqqxhq };
