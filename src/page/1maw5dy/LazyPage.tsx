import React, { lazy, Suspense } from 'react';

const Page1maw5dy = lazy(() => import('./Page'));

const LazyPage1maw5dy = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1maw5dy />
  </Suspense>
);

export { LazyPage1maw5dy };
