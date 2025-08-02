import React, { lazy, Suspense } from 'react';

const Page1mfia6f = lazy(() => import('./Page'));

const LazyPage1mfia6f = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mfia6f />
  </Suspense>
);

export { LazyPage1mfia6f };
