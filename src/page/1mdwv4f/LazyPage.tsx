import React, { lazy, Suspense } from 'react';

const Page1mdwv4f = lazy(() => import('./Page'));

const LazyPage1mdwv4f = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mdwv4f />
  </Suspense>
);

export { LazyPage1mdwv4f };
