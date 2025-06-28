import React, { lazy, Suspense } from 'react';

const Page1gvlzug = lazy(() => import('./Page'));

const LazyPage1gvlzug = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1gvlzug />
  </Suspense>
);

export { LazyPage1gvlzug };
