import React, { lazy, Suspense } from 'react';

const Page1mhtjqo = lazy(() => import('./Page'));

const LazyPage1mhtjqo = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mhtjqo />
  </Suspense>
);

export { LazyPage1mhtjqo };
