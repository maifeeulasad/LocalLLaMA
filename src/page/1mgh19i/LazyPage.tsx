import React, { lazy, Suspense } from 'react';

const Page1mgh19i = lazy(() => import('./Page'));

const LazyPage1mgh19i = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mgh19i />
  </Suspense>
);

export { LazyPage1mgh19i };
