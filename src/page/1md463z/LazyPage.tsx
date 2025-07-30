import React, { lazy, Suspense } from 'react';

const Page1md463z = lazy(() => import('./Page'));

const LazyPage1md463z = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1md463z />
  </Suspense>
);

export { LazyPage1md463z };
