import React, { lazy, Suspense } from 'react';

const Page1llv00i = lazy(() => import('./Page'));

const LazyPage1llv00i = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1llv00i />
  </Suspense>
);

export { LazyPage1llv00i };
