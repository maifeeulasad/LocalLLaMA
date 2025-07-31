import React, { lazy, Suspense } from 'react';

const Page1mdy8f8 = lazy(() => import('./Page'));

const LazyPage1mdy8f8 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mdy8f8 />
  </Suspense>
);

export { LazyPage1mdy8f8 };
