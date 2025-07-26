import React, { lazy, Suspense } from 'react';

const Page1m9j1mh = lazy(() => import('./Page'));

const LazyPage1m9j1mh = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m9j1mh />
  </Suspense>
);

export { LazyPage1m9j1mh };
