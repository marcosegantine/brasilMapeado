import { useEffect, useState } from 'react';

export const useCities = ({ uf }) => {
  const [cities, setCities] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!uf) return;
    setLoading(true);
    fetch(`https://brasilapi.com.br/api/ibge/municipios/v1/${uf}`)
      .then((response) => response.json())
      .then((data) => setCities(data))
      .then(() => setLoading(false));
  }, [uf]);

  return {
    cities,
    loading,
  };
};
