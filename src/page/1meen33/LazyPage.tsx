import React, { lazy, Suspense } from 'react';

const Page1meen33 = lazy(() => import('./Page'));

const LazyPage1meen33 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1meen33 />
  </Suspense>
);

export { LazyPage1meen33 };
