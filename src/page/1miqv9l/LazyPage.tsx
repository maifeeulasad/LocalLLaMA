import React, { lazy, Suspense } from 'react';

const Page1miqv9l = lazy(() => import('./Page'));

const LazyPage1miqv9l = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1miqv9l />
  </Suspense>
);

export { LazyPage1miqv9l };
