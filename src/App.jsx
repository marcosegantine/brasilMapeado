import React, { useState } from 'react';
import { useStates } from './hooks/useStates';
import { useCities } from './hooks/useCities';

import { Select } from '@chakra-ui/react';
const App = () => {
  const { states } = useStates();
  const [selectedState, setSelectedState] = useState('');
  const { cities, loading } = useCities({ uf: selectedState });

  const handleStateUpdate = (event) => {
    setSelectedState(event.target.value);
  };

  const styleSelect = {
    display: 'grid',
    maxWidth: '800px',
    margin: '0 auto',
  };

  return (
    <div style={styleSelect}>
      <Select
        placeholder="Selecione um Estado"
        value={selectedState}
        onChange={handleStateUpdate}
      >
        {states.map((state) => (
          <option key={state.id} value={state.sigla}>
            {state.nome}
          </option>
        ))}
      </Select>

      {loading ? (
        <p>Loading Cities</p>
      ) : (
        <Select placeholder="Selecione uma Cidade">
          {cities.map((city) => (
            <option key={city.codigo_ibge}>{city.nome}</option>
          ))}
        </Select>
      )}
    </div>
  );
};

export default App;
