import './App.css';
import MaterialLayout from './components/Layout/MaterialLayout';
import CheckoutWizard from './components/Example/CheckoutWizard.jsx';

function App() {
  return (
    <div>
      <MaterialLayout>
        <CheckoutWizard />
      </MaterialLayout>
    </div>
  );
}

export default App;
