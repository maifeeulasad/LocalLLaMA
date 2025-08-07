import React, { lazy, Suspense } from 'react';

const Page1mjnhj2 = lazy(() => import('./Page'));

const LazyPage1mjnhj2 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mjnhj2 />
  </Suspense>
);

export { LazyPage1mjnhj2 };
