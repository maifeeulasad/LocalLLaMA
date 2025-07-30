import React, { lazy, Suspense } from 'react';

const Page1md0ech = lazy(() => import('./Page'));

const LazyPage1md0ech = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1md0ech />
  </Suspense>
);

export { LazyPage1md0ech };
