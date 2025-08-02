import React, { lazy, Suspense } from 'react';

const Page1mf08e5 = lazy(() => import('./Page'));

const LazyPage1mf08e5 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mf08e5 />
  </Suspense>
);

export { LazyPage1mf08e5 };
