import React, { lazy, Suspense } from 'react';

const Page1miif0v = lazy(() => import('./Page'));

const LazyPage1miif0v = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1miif0v />
  </Suspense>
);

export { LazyPage1miif0v };
