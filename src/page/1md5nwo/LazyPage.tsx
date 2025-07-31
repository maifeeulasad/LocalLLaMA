import React, { lazy, Suspense } from 'react';

const Page1md5nwo = lazy(() => import('./Page'));

const LazyPage1md5nwo = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1md5nwo />
  </Suspense>
);

export { LazyPage1md5nwo };
