import React, { lazy, Suspense } from 'react';

const Page1mh5h07 = lazy(() => import('./Page'));

const LazyPage1mh5h07 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mh5h07 />
  </Suspense>
);

export { LazyPage1mh5h07 };
