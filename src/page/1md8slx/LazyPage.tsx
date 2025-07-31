import React, { lazy, Suspense } from 'react';

const Page1md8slx = lazy(() => import('./Page'));

const LazyPage1md8slx = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1md8slx />
  </Suspense>
);

export { LazyPage1md8slx };
