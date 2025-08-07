import React, { lazy, Suspense } from 'react';

const Page1mjlg5q = lazy(() => import('./Page'));

const LazyPage1mjlg5q = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mjlg5q />
  </Suspense>
);

export { LazyPage1mjlg5q };
