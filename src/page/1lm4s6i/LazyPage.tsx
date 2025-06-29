import React, { lazy, Suspense } from 'react';

const Page1lm4s6i = lazy(() => import('./Page'));

const LazyPage1lm4s6i = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lm4s6i />
  </Suspense>
);

export { LazyPage1lm4s6i };
