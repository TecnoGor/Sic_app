import React, { useState, useEffect } from 'react';
import { View, TextInput, ScrollView } from 'react-native';
import { DataTable } from 'react-native-paper';
import axios from 'axios';

const DataTablePersonal = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortDirection, setSortDirection] = useState('asc');
  const [sortedColumn, setSortedColumn] = useState('id');

  // Obtener datos de la API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5001/api/data');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  // Filtrar datos basados en la búsqueda
  const filteredData = data.filter((item) =>
    Object.values(item).some((value) =>
      String(value).toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  // Ordenar datos
  const sortedData = filteredData.sort((a, b) => {
    if (sortDirection === 'asc') {
      return a[sortedColumn] > b[sortedColumn] ? 1 : -1;
    } else {
      return a[sortedColumn] < b[sortedColumn] ? 1 : -1;
    }
  });

  // Paginación
  const paginatedData = sortedData.slice(
    page * itemsPerPage,
    (page + 1) * itemsPerPage
  );

  return (
    <ScrollView>
      {/* Barra de búsqueda */}
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, margin: 10, padding: 5 }}
        placeholder="Buscar..."
        value={searchQuery}
        onChangeText={(text) => setSearchQuery(text)}
      />

      {/* Tabla */}
      <DataTable>
        <DataTable.Header>
          <DataTable.Title
            sortDirection={sortedColumn === 'cedper' ? sortDirection : null}
            onPress={() => {
              setSortedColumn('cedper');
              setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
            }}
          >
            Cedula
          </DataTable.Title>
          <DataTable.Title
            sortDirection={sortedColumn === 'nomper' ? sortDirection : null}
            onPress={() => {
              setSortedColumn('nomper');
              setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
            }}
          >
            Nombre
          </DataTable.Title>
          <DataTable.Title
            sortDirection={sortedColumn === 'apeper' ? sortDirection : null}
            onPress={() => {
              setSortedColumn('apeper');
              setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
            }}
          >
            Apellido
          </DataTable.Title>
          <DataTable.Title
            sortDirection={sortedColumn === 'carantper' ? sortDirection : null}
            onPress={() => {
              setSortedColumn('carantper');
              setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
            }}
          >
            Cargo
          </DataTable.Title>
        </DataTable.Header>

        {paginatedData.map((item) => (
          <DataTable.Row key={item.codper}>
            <DataTable.Cell>{item.cedper}</DataTable.Cell>
            <DataTable.Cell>{item.nomper}</DataTable.Cell>
            <DataTable.Cell>{item.apeper}</DataTable.Cell>
            <DataTable.Cell>{item.carantper}</DataTable.Cell>
          </DataTable.Row>
        ))}

        {/* Paginación */}
        <DataTable.Pagination
          page={page}
          numberOfPages={Math.ceil(filteredData.length / itemsPerPage)}
          onPageChange={(newPage) => setPage(newPage)}
          label={`${page * itemsPerPage + 1}-${Math.min(
            (page + 1) * itemsPerPage,
            filteredData.length
          )} de ${filteredData.length}`}
          itemsPerPage={itemsPerPage}
          setItemsPerPage={setItemsPerPage}
          showFastPaginationControls
          numberOfItemsPerPageList={[5, 10, 15]}
        />
      </DataTable>
    </ScrollView>
  );
};

export default DataTablePersonal;