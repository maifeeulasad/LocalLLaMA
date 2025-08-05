import React, { lazy, Suspense } from 'react';

const Page1mhl06m = lazy(() => import('./Page'));

const LazyPage1mhl06m = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mhl06m />
  </Suspense>
);

export { LazyPage1mhl06m };
