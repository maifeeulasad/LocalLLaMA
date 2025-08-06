import React, { lazy, Suspense } from 'react';

const Page1miqk3e = lazy(() => import('./Page'));

const LazyPage1miqk3e = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1miqk3e />
  </Suspense>
);

export { LazyPage1miqk3e };
