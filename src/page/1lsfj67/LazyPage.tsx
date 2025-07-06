import React, { lazy, Suspense } from 'react';

const Page1lsfj67 = lazy(() => import('./Page'));

const LazyPage1lsfj67 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lsfj67 />
  </Suspense>
);

export { LazyPage1lsfj67 };
