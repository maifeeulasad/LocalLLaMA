import React, { lazy, Suspense } from 'react';

const Page1mjo3qk = lazy(() => import('./Page'));

const LazyPage1mjo3qk = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mjo3qk />
  </Suspense>
);

export { LazyPage1mjo3qk };
