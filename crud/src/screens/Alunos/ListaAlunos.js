import React, { useState } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { Button, Card, FAB, MD3Colors, Text } from 'react-native-paper'
import Toast from 'react-native-toast-message'

export default function ListaAlunos({ navigation }) {

  const [alunos, setAlunos] = useState([
    {
      nome: 'João Paulo',
      matricula: '252334244',
      turno: 'Matutino',
      curso: 'ADS'
    },
    {
      nome: 'Jorge Luiz',
      matricula: '20',
      turno: 'Vespertino',
      curso: 'Matutino'
    }
  ])

  function adicionarAluno(aluno) {
    let novaListaAlunos = alunos
    novaListaAlunos.push(aluno)
    setAlunos(novaListaAlunos)
  }

  function editarAluno(alunoAntigo, novosDados) {
    
    const novaListaAlunos = alunos.map(aluno => {
     if(aluno === alunoAntigo){
       return novosDados
     } else {
       return aluno
     }
   })

    setAlunos(novaListaAlunos)
  }

  function excluirAluno(aluno) {
    const novaListaAluno = alunos.filter(a => a !== aluno)
    setAlunos(novaListaAluno)
    Toast.show({
      type: 'success',
      text1: 'Aluno excluído com sucesso!'
    })
  }

  return (
    <View style={styles.container}>
      <Text variant='titleLarge' style={styles.title} >Lista de Alunos</Text>
      <FlatList
        style={styles.list}
        data={alunos}
        renderItem={({ item }) => (
          <Card
            mode='outlined'
            style={styles.card}
          >
            <Card.Content
              style={styles.cardContent}
            >
              <View style={{ flex: 1 }}>
                <Text variant='titleMedium'>{item?.nome}</Text>
                <Text variant='bodyLarge'>Matrícula: {item?.matricula}</Text>
                <Text variant='bodyLarge'>Turno: {item?.turno}</Text>
                <Text variant='bodyLarge'>Curso: {item.curso}</Text>
              </View>
            </Card.Content>
            <Card.Actions>
              <Button onPress={() => navigation.push('FormAluno', { acao: editarAluno, aluno: item })}>
                Editar
              </Button>
              <Button onPress={() => excluirAluno(item)}>
                Excluir
              </Button>
            </Card.Actions>
          </Card>
        )}
      />
      <FAB
        icon="plus"
        style={styles.fab}
        onPress={() => navigation.push('FormAluno', { acao: adicionarAluno })}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontWeight: 'bold',
    margin: 10
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
  list: {
    width: '90%',
  },
  card: {
    marginTop: 15
  },
  cardContent: {
    flexDirection: 'row',
    backgroundColor: '#B2C8BA',
    borderWidth: 2,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingBottom: 15
  }
})