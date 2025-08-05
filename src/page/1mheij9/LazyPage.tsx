import React, { lazy, Suspense } from 'react';

const Page1mheij9 = lazy(() => import('./Page'));

const LazyPage1mheij9 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mheij9 />
  </Suspense>
);

export { LazyPage1mheij9 };
