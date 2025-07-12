import React, { lazy, Suspense } from 'react';

const Page1lxyj92 = lazy(() => import('./Page'));

const LazyPage1lxyj92 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lxyj92 />
  </Suspense>
);

export { LazyPage1lxyj92 };
