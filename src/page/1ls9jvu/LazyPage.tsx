import React, { lazy, Suspense } from 'react';

const Page1ls9jvu = lazy(() => import('./Page'));

const LazyPage1ls9jvu = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1ls9jvu />
  </Suspense>
);

export { LazyPage1ls9jvu };
