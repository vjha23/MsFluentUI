
import './App.css';
import Navigation from './Navigation';
import 'office-ui-fabric-react/dist/css/fabric.css'
import CardSection from './CardSection'
import OperationTable from './OperationTable';

function App() {
  return (
    <div class="ms-Grid" dir="ltr">
      <div class="ms-Grid-row">
        <div class="ms-Grid-col ms-sm-1 ms-xl1">
          <Navigation />
        </div>
        <div className='ms-Grid-col ms-sm11 ms-xl11 main-elment'>

          <div className='ms-Grid-row'>
            <CardSection />
          </div>
          <div className='ms-Grid-row'>
            <OperationTable />
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
