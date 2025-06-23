import React, { useEffect, useState } from 'react'
import { View, Text, Button, StyleSheet, ScrollView, Linking } from 'react-native'
import Card from '../components/Card'
import { getSimulatedHealthData } from '../data/Dados'

export default function HomeScreen() {
 const [data, setData] = useState(null)

 useEffect(() => {
   setTimeout(() => {
     setData(getSimulatedHealthData())
   }, 1000)
 }, [])

 const openMore = () => {
   Linking.openURL('https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z')
 }

 return (
   <ScrollView contentContainerStyle={styles.container}>
     <Text style={styles.title}>Minha Saúde Hoje</Text>

     {!data ? (
       <Text style={styles.loading}></Text>
     ) : (
       <>
         <Card label="Passos de Hoje" value={`${data.steps}`} measure={"steps"}/>
         <Card label="Horas de Sono" value={`${data.sleepHours} h`} measure={"sleep"} />
         <Card label="Nível de Hidratação" value={`${data.hydration} L`} measure={"hydratation"} />
         <Card label="Frequência Cardíaca (Média)" value={`${data.heartRate} bpm`} measure={"hearthRate"} />
         <View style={{ marginTop: 20 }}>
           <Button title="Aprenda a se cuidar" onPress={openMore} />
         </View>
       </>
     )}
   </ScrollView>
 )
}

const styles = StyleSheet.create({
 container: {
   padding: 24,
   alignItems: 'center',
   backgroundColor: '#f0f4f8',
   flexGrow: 1
 },
 title: {
   fontSize: 28,
   fontWeight: 'bold',
   marginBottom: 24
 },
 loading: {
   fontSize: 18,
   marginTop: 20,
   color: '#777'
 }
})
