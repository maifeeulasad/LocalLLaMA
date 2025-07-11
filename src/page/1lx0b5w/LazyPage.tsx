import React, { lazy, Suspense } from 'react';

const Page1lx0b5w = lazy(() => import('./Page'));

const LazyPage1lx0b5w = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lx0b5w />
  </Suspense>
);

export { LazyPage1lx0b5w };
