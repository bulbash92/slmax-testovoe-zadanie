import React, {useEffect, useRef, useState} from 'react';

import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {GestureHandlerRootView, Swipeable} from 'react-native-gesture-handler';

const Notes = ({title, description, onRemoveHandler, id}) => {
  const ref = useRef();
  const swipeableRef = useRef();

  const [showNotes, setShowNotes] = useState(false);
  const [showTimer, setShowTimer] = useState(false);
  const [counter, setCounter] = useState(5);

  const onPressNotesHandler = () => {
    setShowNotes(!showNotes);
  };

  const onPressRemove = () => {
    setShowTimer(true);
  };

  const timerHandler = () => {
    ref.current = setInterval(() => {
      setCounter(counter => counter - 1);
    }, 1000);
  };

  const clearIntervalHandler = () => {
    return clearInterval(ref.current);
  };

  const unDoDelete = () => {
    clearIntervalHandler();
    swipeableRef.current.close()
    setShowTimer(false);
    setCounter(5);
  };

  if (counter <= 0) {
    onRemoveHandler(id);
    clearIntervalHandler();
  }

  useEffect(() => {
    if (showTimer) {
      timerHandler();
    }

    return () => clearIntervalHandler();
  }, [showTimer]);

  const date = new Date();
  const currentDate = `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;

  const renderRightItem = () => {
    return !showTimer ? (
      <TouchableOpacity style={styles.rightButton} onPress={onPressRemove}>
        <Text style={styles.rightButtonText}>Уалить</Text>
      </TouchableOpacity>
    ) : (
      <TouchableOpacity style={styles.buttonTimer} onPress={unDoDelete}>
        <View style={styles.circle}>
        <Text style={styles.rightButtonText}>{counter}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <>
      <GestureHandlerRootView>
        <Swipeable
          ref={swipeableRef}
          overshootRight={false}
          renderRightActions={renderRightItem}>
          <TouchableOpacity
            activeOpacity={0.75}
            style={styles.container}
            onPress={onPressNotesHandler}>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>{title}</Text>
            </View>
            <View style={styles.decor} />
            <View style={styles.descriptionContainer}>
              <Text style={styles.description}>{description.slice(0, 20)}</Text>
            </View>
            <View style={styles.iconContainer}>
              <Image
                style={{width: 8, height: 4}}
                source={require('../Vector.png')}
              />
            </View>
          </TouchableOpacity>
        </Swipeable>
      </GestureHandlerRootView>
      {showNotes && (
        <View style={styles.note}>
          <View style={styles.dateContainer}>
            <Text style={styles.date}>{currentDate}</Text>
          </View>
          <View style={styles.textContainer}>
            <Text style>{description}</Text>
          </View>
        </View>
      )}
    </>
  );
};

export default Notes;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    height: 37,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'gray',
    alignItems: 'center',
    paddingLeft: 17,
    marginTop: 10,
  },
  titleContainer: {
    paddingRight: 7,
  },
  title: {
    fontSize: 16,
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
    fontSize: 8,
    fontWeight: '300',
  },
  iconContainer: {
    position: 'absolute',
    right: 13,
    width: 24,
    height: 26,
    alignItems: 'center',
    justifyContent: 'center',
  },
  note: {
    width: '100%',
    minHeight: 100,
    borderBottomWidth: 1,
    borderBottomColor: '#D2D2D2',
    paddingLeft: 17,
    paddingRight: 22,
  },
  dateContainer: {
    marginLeft: 'auto',
    marginTop: 10,
  },
  date: {
    fontWeight: '300',
    fontSize: 8,
    color: '#8F8F8F',
  },
  textContainer: {
    marginTop: 9,
    fontWeight: '300',
    fontSize: 10,
  },
  rightButton: {
    width: 95,
    height: 37,
    backgroundColor: 'red',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 'auto',
  },
  rightButtonText: {
    fontSize: 10,
    color: '#fff',
  },
  buttonTimer: {
    width: 45,
    height: 37,
    backgroundColor: 'red',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 'auto',
  },

});
