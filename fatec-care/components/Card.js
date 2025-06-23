import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function IndicatorCard({ label, value, measure}) {
  if (measure == 'hearthRate'){
    console.log(measure)
      return (   <View style={hearthRate.card}>
        <Text style={hearthRate.label}>{label}</Text>
        <Text style={hearthRate.value}>{value}</Text>
      </View>)
    }
  else if(measure == 'hydratation') {

      return (   <View style={hydratation.card}>
        <Text style={hydratation.label}>{label}</Text>
        <Text style={hydratation.value}>{value}</Text>
      </View>)
  } else if (measure == 'steps') {
          return (   <View style={steps.card}>
        <Text style={steps.label}>{label}</Text>
        <Text style={steps.value}>{value}</Text>
      </View>)
  } else if (measure == 'sleep'){
          return (   <View style={sleep.card}>
        <Text style={sleep.label}>{label}</Text>
        <Text style={sleep.value}>{value}</Text>
      </View>)
  } else {
          return (   <View style={styles.card}>
        <Text style={styles.label}>{label}</Text>
        <Text style={styles.value}>{value}</Text>
      </View>)
  }
   

}

const hearthRate = StyleSheet.create({
 card: {
   backgroundColor: '#f26a8d',
   width: '100%',
   padding: 20,
   marginVertical: 8,
   borderRadius: 12,
   shadowColor: '#000',
   shadowOffset: { width: 0, height: 2 },
   shadowOpacity: 0.2,
   shadowRadius: 5,
   elevation: 4
 },
 label: {
   fontSize: 16,
   color: '#38040e'
 },
 value: {
   fontSize: 22,
   fontWeight: 'bold',
   color: '#880d1e'
 }
})

const steps = StyleSheet.create({
 card: {
   backgroundColor: '#9ef01a',
   width: '100%',
   padding: 20,
   marginVertical: 8,
   borderRadius: 12,
   shadowColor: '#000',
   shadowOffset: { width: 0, height: 2 },
   shadowOpacity: 0.2,
   shadowRadius: 5,
   elevation: 4
 },
 label: {
   fontSize: 16,
   color: '#008000'
 },
 value: {
   fontSize: 22,
   fontWeight: 'bold',
   color: '#006400'
 }
})

const sleep = StyleSheet.create({
 card: {
   backgroundColor: '#b298dc',
   width: '100%',
   padding: 20,
   marginVertical: 8,
   borderRadius: 12,
   shadowColor: '#000',
   shadowOffset: { width: 0, height: 2 },
   shadowOpacity: 0.2,
   shadowRadius: 5,
   elevation: 4
 },
 label: {
   fontSize: 16,
   color: '#a663cc'
 },
 value: {
   fontSize: 22,
   fontWeight: 'bold',
   color: '#6f2dbd'
 }
})

const hydratation = StyleSheet.create({
 card: {
   backgroundColor: '#bbdefb',
   width: '100%',
   padding: 20,
   marginVertical: 8,
   borderRadius: 12,
   shadowColor: '#000',
   shadowOffset: { width: 0, height: 2 },
   shadowOpacity: 0.2,
   shadowRadius: 5,
   elevation: 4
 },
 label: {
   fontSize: 16,
   color: '#1e88e5'
 },
 value: {
   fontSize: 22,
   fontWeight: 'bold',
   color: '#1565c0'
 }
})
const styles = StyleSheet.create({
 card: {
   backgroundColor: '#fff',
   width: '100%',
   padding: 20,
   marginVertical: 8,
   borderRadius: 12,
   shadowColor: '#000',
   shadowOffset: { width: 0, height: 2 },
   shadowOpacity: 0.2,
   shadowRadius: 5,
   elevation: 4
 },
 label: {
   fontSize: 16,
   color: '#555'
 },
 value: {
   fontSize: 22,
   fontWeight: 'bold',
   color: '#222'
 }
})
