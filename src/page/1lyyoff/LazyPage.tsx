import React, { lazy, Suspense } from 'react';

const Page1lyyoff = lazy(() => import('./Page'));

const LazyPage1lyyoff = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lyyoff />
  </Suspense>
);

export { LazyPage1lyyoff };
