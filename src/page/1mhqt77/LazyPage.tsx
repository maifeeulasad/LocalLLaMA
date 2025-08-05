import React, { lazy, Suspense } from 'react';

const Page1mhqt77 = lazy(() => import('./Page'));

const LazyPage1mhqt77 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mhqt77 />
  </Suspense>
);

export { LazyPage1mhqt77 };
