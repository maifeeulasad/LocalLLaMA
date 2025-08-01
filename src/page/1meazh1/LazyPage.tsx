import React, { lazy, Suspense } from 'react';

const Page1meazh1 = lazy(() => import('./Page'));

const LazyPage1meazh1 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1meazh1 />
  </Suspense>
);

export { LazyPage1meazh1 };
