import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './TableDetailStyles';
import { Table, Row, Rows } from 'react-native-table-component';

export default function TableDetail(props) {
  const { params } = props;
  const tableHead = ['Estado', 'Especie', 'Género', 'Origen'];
  const tableData = [[params.status, params.species, params.gender, params.origin]];

  return (
    <View style={styles.container}>
      <Table borderStyle={styles.border}>
        <Row data={tableHead} style={styles.head} textStyle={styles.headText} />
        <Rows data={tableData} textStyle={styles.rowText} />
      </Table>
    </View>
  );
}
