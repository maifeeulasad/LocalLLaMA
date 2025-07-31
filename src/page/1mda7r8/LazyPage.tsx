import React, { lazy, Suspense } from 'react';

const Page1mda7r8 = lazy(() => import('./Page'));

const LazyPage1mda7r8 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mda7r8 />
  </Suspense>
);

export { LazyPage1mda7r8 };
