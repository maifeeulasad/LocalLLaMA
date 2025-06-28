import React, { lazy, Suspense } from 'react';

const Page1iu19zy = lazy(() => import('./Page'));

const LazyPage1iu19zy = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1iu19zy />
  </Suspense>
);

export { LazyPage1iu19zy };
