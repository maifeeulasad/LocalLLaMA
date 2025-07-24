import React, { lazy, Suspense } from 'react';

const Page1m7u3mb = lazy(() => import('./Page'));

const LazyPage1m7u3mb = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m7u3mb />
  </Suspense>
);

export { LazyPage1m7u3mb };
