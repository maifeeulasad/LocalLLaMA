import React, { lazy, Suspense } from 'react';

const Page1lw7igq = lazy(() => import('./Page'));

const LazyPage1lw7igq = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lw7igq />
  </Suspense>
);

export { LazyPage1lw7igq };
