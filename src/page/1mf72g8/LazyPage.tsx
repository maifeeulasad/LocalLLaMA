import React, { lazy, Suspense } from 'react';

const Page1mf72g8 = lazy(() => import('./Page'));

const LazyPage1mf72g8 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mf72g8 />
  </Suspense>
);

export { LazyPage1mf72g8 };
