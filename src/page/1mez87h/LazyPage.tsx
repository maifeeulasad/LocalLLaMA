import React, { lazy, Suspense } from 'react';

const Page1mez87h = lazy(() => import('./Page'));

const LazyPage1mez87h = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mez87h />
  </Suspense>
);

export { LazyPage1mez87h };
