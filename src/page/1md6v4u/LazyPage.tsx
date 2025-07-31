import React, { lazy, Suspense } from 'react';

const Page1md6v4u = lazy(() => import('./Page'));

const LazyPage1md6v4u = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1md6v4u />
  </Suspense>
);

export { LazyPage1md6v4u };
