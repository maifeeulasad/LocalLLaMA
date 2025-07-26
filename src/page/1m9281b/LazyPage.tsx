import React, { lazy, Suspense } from 'react';

const Page1m9281b = lazy(() => import('./Page'));

const LazyPage1m9281b = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m9281b />
  </Suspense>
);

export { LazyPage1m9281b };
