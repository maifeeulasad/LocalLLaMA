import React, { lazy, Suspense } from 'react';

const Page1lsi0gj = lazy(() => import('./Page'));

const LazyPage1lsi0gj = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lsi0gj />
  </Suspense>
);

export { LazyPage1lsi0gj };
