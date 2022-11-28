import React, {useRef} from 'react';

import {StyleSheet, TextInput, View} from 'react-native';

const CreateNote = ({
  title,
  description,
  onChangeTitle,
  onChangeDescription,
  onSubmitEditing,
}) => {
  // const ref_inputTitle = useRef();
  const ref_inputDescription = useRef();
  const onPressSubmitTitle = () => {
    ref_inputDescription.current.focus();
  };
  return (
    <View style={styles.container}>
      <TextInput
        value={title}
        style={styles.title}
        maxLength={25}
        placeholder={'Название'}
        onChangeText={onChangeTitle}
        onSubmitEditing={onPressSubmitTitle}
        blurOnSubmit={true}
      />
      <TextInput
        ref={ref_inputDescription}
        value={description}
        style={styles.description}
        multiline
        placeholder={'Текст описание'}
        onChangeText={onChangeDescription}
        blurOnSubmit={true}
        onSubmitEditing={onSubmitEditing}
      />
    </View>
  );
};

export default CreateNote;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    // flexDirection: 'row',
    minHeight: 82,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'gray',
    alignItems: 'center',
    paddingLeft: 17,
    paddingRight: 22,
    // marginTop: 20,
  },
  titleContainer: {
    paddingRight: 7,
  },
  title: {
    width: '100%',
    borderBottomColor: '#D2D2D2',
    borderBottomWidth: 1,
    fontSize: 14,
    fontWeight: '600',
    color: '#000000',
  },
  decor: {
    width: 1,
    height: 15,
    backgroundColor: 'black',
  },
  descriptionContainer: {
    marginLeft: 8.6,
  },
  description: {
    width: '100%',
    fontSize: 10,
    fontWeight: '300',
  },
});
