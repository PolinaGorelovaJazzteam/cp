// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { lib1 } from '@libs/lib-1';
import styles from './app.module.css';

import NxWelcome from './nx-welcome';

export function App() {
  return (
    <div>
      {lib1()}
    </div>
  );
}

export default App;
