import React, { lazy, Suspense } from 'react';

const Page1mh09f8 = lazy(() => import('./Page'));

const LazyPage1mh09f8 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mh09f8 />
  </Suspense>
);

export { LazyPage1mh09f8 };
