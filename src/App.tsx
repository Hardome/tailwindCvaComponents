import {Button} from './Button';
import './App.css';

function App() {
  return (
    <>
      <table className="button-table">
        <thead>
          <tr>
            <th rowSpan={2}>State</th>
            <th rowSpan={2}>Size</th>
            <th colSpan={5}>Variant</th>
          </tr>
          <tr>
            <th>Default</th>
            <th>Primary</th>
            <th>Secondary</th>
            <th>Outlined</th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody>
          {/* Enabled States */}
          <tr>
            <td rowSpan={3}>Normal</td>
            <td>Small</td>
            <td><Button size="s">Default</Button></td>
            <td><Button variant="primary" size="s">Primary</Button></td>
            <td><Button variant="secondary" size="s">Secondary</Button></td>
            <td><Button variant="outlined" size="s">Outlined</Button></td>
            <td><Button variant="link" size="s">Link</Button></td>
          </tr>
          <tr>
            <td>Medium</td>
            <td><Button size="m">Default</Button></td>
            <td><Button variant="primary" size="m">Primary</Button></td>
            <td><Button variant="secondary" size="m">Secondary</Button></td>
            <td><Button variant="outlined" size="m">Outlined</Button></td>
            <td><Button variant="link" size="m">Link</Button></td>
          </tr>
          <tr>
            <td>Loading</td>
            <td><Button size="m" isLoading>Default</Button></td>
            <td><Button variant="primary" size="m" isLoading>Primary</Button></td>
            <td><Button variant="secondary" size="m" isLoading>Secondary</Button></td>
            <td><Button variant="outlined" size="m" isLoading>Outlined</Button></td>
            <td><Button variant="link" size="m" isLoading>Link</Button></td>
          </tr>

          {/* Disabled States */}
          <tr>
            <td rowSpan={3}>Disabled</td>
            <td>Small</td>
            <td><Button size="s" disabled>Default</Button></td>
            <td><Button variant="primary" size="s" disabled>Primary</Button></td>
            <td><Button variant="secondary" size="s" disabled>Secondary</Button></td>
            <td><Button variant="outlined" size="s" disabled>Outlined</Button></td>
            <td><Button variant="link" size="s" disabled>Link</Button></td>
          </tr>
          <tr>
            <td>Medium</td>
            <td><Button size="m" disabled>Default</Button></td>
            <td><Button variant="primary" size="m" disabled>Primary</Button></td>
            <td><Button variant="secondary" size="m" disabled>Secondary</Button></td>
            <td><Button variant="outlined" size="m" disabled>Outlined</Button></td>
            <td><Button variant="link" size="m" disabled>Link</Button></td>
          </tr>
          <tr>
            <td>Loading</td>
            <td><Button size="m" disabled isLoading>Default</Button></td>
            <td><Button variant="primary" size="m" disabled isLoading>Primary</Button></td>
            <td><Button variant="secondary" size="m" disabled isLoading>Secondary</Button></td>
            <td><Button variant="outlined" size="m" disabled isLoading>Outlined</Button></td>
            <td><Button variant="link" size="m" disabled isLoading>Link</Button></td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default App;