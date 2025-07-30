import React, { lazy, Suspense } from 'react';

const Page1mckrn1 = lazy(() => import('./Page'));

const LazyPage1mckrn1 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mckrn1 />
  </Suspense>
);

export { LazyPage1mckrn1 };
