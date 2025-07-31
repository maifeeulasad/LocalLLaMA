import React, { lazy, Suspense } from 'react';

const Page1md9j2e = lazy(() => import('./Page'));

const LazyPage1md9j2e = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1md9j2e />
  </Suspense>
);

export { LazyPage1md9j2e };
