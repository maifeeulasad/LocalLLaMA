import React, { lazy, Suspense } from 'react';

const Page1lpvpqv = lazy(() => import('./Page'));

const LazyPage1lpvpqv = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lpvpqv />
  </Suspense>
);

export { LazyPage1lpvpqv };
