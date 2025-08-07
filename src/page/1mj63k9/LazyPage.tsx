import React, { lazy, Suspense } from 'react';

const Page1mj63k9 = lazy(() => import('./Page'));

const LazyPage1mj63k9 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mj63k9 />
  </Suspense>
);

export { LazyPage1mj63k9 };
