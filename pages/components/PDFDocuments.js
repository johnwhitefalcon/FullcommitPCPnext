

import React from 'react';
import { Page, Document, Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4',
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

const PDFDocument = ({ result }) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text>Next.js Home Page PDF</Text>
          {result && (
            <Text>{JSON.stringify(result, null, 2)}</Text>
            // Replace this with the actual rendering logic for your result data in the PDF
          )}
        </View>
      </Page>
    </Document>
  );
};

export default PDFDocument;