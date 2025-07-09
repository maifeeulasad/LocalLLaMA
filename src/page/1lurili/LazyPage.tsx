import React, { lazy, Suspense } from 'react';

const Page1lurili = lazy(() => import('./Page'));

const LazyPage1lurili = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lurili />
  </Suspense>
);

export { LazyPage1lurili };
