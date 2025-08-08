import React, { lazy, Suspense } from 'react';

const Page1mkip7t = lazy(() => import('./Page'));

const LazyPage1mkip7t = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mkip7t />
  </Suspense>
);

export { LazyPage1mkip7t };
