import React, { lazy, Suspense } from 'react';

const Page1ly0jnx = lazy(() => import('./Page'));

const LazyPage1ly0jnx = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1ly0jnx />
  </Suspense>
);

export { LazyPage1ly0jnx };
