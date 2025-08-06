import React, { lazy, Suspense } from 'react';

const Page1mik0co = lazy(() => import('./Page'));

const LazyPage1mik0co = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mik0co />
  </Suspense>
);

export { LazyPage1mik0co };
