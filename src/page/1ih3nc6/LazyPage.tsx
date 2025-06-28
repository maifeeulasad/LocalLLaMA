import React, { lazy, Suspense } from 'react';

const Page1ih3nc6 = lazy(() => import('./Page'));

const LazyPage1ih3nc6 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1ih3nc6 />
  </Suspense>
);

export { LazyPage1ih3nc6 };
