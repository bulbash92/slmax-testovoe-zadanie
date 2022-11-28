import React, {useState} from 'react';

import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import uuid from 'react-native-uuid';
import CreateNote from '../components/createNote';
import Header from '../components/header';
import Notes from '../components/notes';

const FirstScreen = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [notes, setNotes] = useState([]);

  const clearDescriptionAndTitle = () => {
    setTitle('');
    setDescription('');
  };

  const createNoteHandler = () => {
    const newArr = [
      ...notes,
      {title: title, description: description, id: uuid.v4()},
    ];
    setNotes(newArr);
    clearDescriptionAndTitle();
  };

  const removeNoteHandler = id => {
    const newNotes = notes.filter(n => n.id !== id);
    setNotes(newNotes);
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Заметки</Text>
      </View>
      <ScrollView contentContainerStyle={{flex: 1}}>
        <View style={styles.notesContainer}>
          {notes.map(n => (
            <Notes
              onRemoveHandler={removeNoteHandler}
              key={n.id}
              id={n.id}
              title={n.title}
              description={n.description}
            />
          ))}
        </View>
        <View style={{marginTop: 10, paddingHorizontal: 30}}>
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <View style={{marginBottom: 45}}>

              <CreateNote
                title={title}
                description={description}
                onChangeTitle={setTitle}
                onSubmitEditing={createNoteHandler}
                onChangeDescription={setDescription}
              />
            </View>
          </KeyboardAvoidingView>
        </View>
      </ScrollView>
    </View>
  );
};

export default FirstScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    marginTop: 80,
  },
  headerText: {
    fontSize: 28,
    fontWeight: '600',
    color: '#fff',
    textAlign: 'center',
  },
  notesContainer: {
    flex: 1,
    paddingHorizontal: 30,
    marginTop: 116,
  },
});
