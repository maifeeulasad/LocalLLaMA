import React, { lazy, Suspense } from 'react';

const Page1lzzka4 = lazy(() => import('./Page'));

const LazyPage1lzzka4 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lzzka4 />
  </Suspense>
);

export { LazyPage1lzzka4 };
