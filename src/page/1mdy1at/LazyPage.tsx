import React, { lazy, Suspense } from 'react';

const Page1mdy1at = lazy(() => import('./Page'));

const LazyPage1mdy1at = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mdy1at />
  </Suspense>
);

export { LazyPage1mdy1at };
