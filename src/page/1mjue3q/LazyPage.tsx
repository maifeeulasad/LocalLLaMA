import React, { lazy, Suspense } from 'react';

const Page1mjue3q = lazy(() => import('./Page'));

const LazyPage1mjue3q = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mjue3q />
  </Suspense>
);

export { LazyPage1mjue3q };
