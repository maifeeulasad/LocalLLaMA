import React, { lazy, Suspense } from 'react';

const Page1mdnp8j = lazy(() => import('./Page'));

const LazyPage1mdnp8j = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mdnp8j />
  </Suspense>
);

export { LazyPage1mdnp8j };
