import React, { lazy, Suspense } from 'react';

const Page1m4of82 = lazy(() => import('./Page'));

const LazyPage1m4of82 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m4of82 />
  </Suspense>
);

export { LazyPage1m4of82 };
