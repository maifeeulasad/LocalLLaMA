import React, { lazy, Suspense } from 'react';

const Page1mby5ct = lazy(() => import('./Page'));

const LazyPage1mby5ct = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mby5ct />
  </Suspense>
);

export { LazyPage1mby5ct };
