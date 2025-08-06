import React, { lazy, Suspense } from 'react';

const Page1miquy8 = lazy(() => import('./Page'));

const LazyPage1miquy8 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1miquy8 />
  </Suspense>
);

export { LazyPage1miquy8 };
