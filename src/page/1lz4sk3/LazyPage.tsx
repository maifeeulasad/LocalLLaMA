import React, { lazy, Suspense } from 'react';

const Page1lz4sk3 = lazy(() => import('./Page'));

const LazyPage1lz4sk3 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lz4sk3 />
  </Suspense>
);

export { LazyPage1lz4sk3 };
