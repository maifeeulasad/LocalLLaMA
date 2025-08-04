import React, { lazy, Suspense } from 'react';

const Page1mhbk4f = lazy(() => import('./Page'));

const LazyPage1mhbk4f = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mhbk4f />
  </Suspense>
);

export { LazyPage1mhbk4f };
