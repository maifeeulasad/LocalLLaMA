import React, { lazy, Suspense } from 'react';

const Page1mh6z16 = lazy(() => import('./Page'));

const LazyPage1mh6z16 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mh6z16 />
  </Suspense>
);

export { LazyPage1mh6z16 };
