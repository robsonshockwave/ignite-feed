import { Header } from './components/Header';
import './global.css';
import styles from './App.module.css';
import { Sidebar } from './components/Sidebar';

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <div>
            <h1>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Similique, obcaecati rem beatae cumque deserunt expedita natus
              error debitis soluta dolores, atque incidunt exercitationem, quam
              sequi maiores commodi illum harum non.
            </h1>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
