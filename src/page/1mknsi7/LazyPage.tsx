import React, { lazy, Suspense } from 'react';

const Page1mknsi7 = lazy(() => import('./Page'));

const LazyPage1mknsi7 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mknsi7 />
  </Suspense>
);

export { LazyPage1mknsi7 };
