import './App.css';

import { Map } from './component/Map'
import { Title } from './component/Title';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Title level="1" text="Testare Componente" />
      </header>
      <main>

        <Map zoom='10' address="Chisinau" />

        <Title level="4" text="Salut Brizy" />
      </main>
    </div>
  );
}

export default App;
