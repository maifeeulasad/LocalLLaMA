import React, { lazy, Suspense } from 'react';

const Page1mhk4it = lazy(() => import('./Page'));

const LazyPage1mhk4it = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mhk4it />
  </Suspense>
);

export { LazyPage1mhk4it };
