import React, { lazy, Suspense } from 'react';

const Page1mhhiw2 = lazy(() => import('./Page'));

const LazyPage1mhhiw2 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mhhiw2 />
  </Suspense>
);

export { LazyPage1mhhiw2 };
