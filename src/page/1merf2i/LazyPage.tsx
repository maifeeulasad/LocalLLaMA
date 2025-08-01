import React, { lazy, Suspense } from 'react';

const Page1merf2i = lazy(() => import('./Page'));

const LazyPage1merf2i = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1merf2i />
  </Suspense>
);

export { LazyPage1merf2i };
