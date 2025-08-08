import React, { lazy, Suspense } from 'react';

const Page1mkf21i = lazy(() => import('./Page'));

const LazyPage1mkf21i = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mkf21i />
  </Suspense>
);

export { LazyPage1mkf21i };
