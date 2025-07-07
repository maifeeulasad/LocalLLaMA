import React, { lazy, Suspense } from 'react';

const Page1ltj8pg = lazy(() => import('./Page'));

const LazyPage1ltj8pg = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1ltj8pg />
  </Suspense>
);

export { LazyPage1ltj8pg };
