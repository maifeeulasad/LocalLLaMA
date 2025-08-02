import React, { lazy, Suspense } from 'react';

const Page1mf0hou = lazy(() => import('./Page'));

const LazyPage1mf0hou = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mf0hou />
  </Suspense>
);

export { LazyPage1mf0hou };
