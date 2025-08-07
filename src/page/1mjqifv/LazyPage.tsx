import React, { lazy, Suspense } from 'react';

const Page1mjqifv = lazy(() => import('./Page'));

const LazyPage1mjqifv = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mjqifv />
  </Suspense>
);

export { LazyPage1mjqifv };
