import React, { lazy, Suspense } from 'react';

const Page1mjqss8 = lazy(() => import('./Page'));

const LazyPage1mjqss8 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mjqss8 />
  </Suspense>
);

export { LazyPage1mjqss8 };
