import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import {
  View,
  StyleSheet,
  SafeAreaView,
  Text,
  FlatList,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
import {Button, Card} from '../components';

const Home = ({navigation}) => {
  const [todos, setTodos] = useState([]);
  const [query, setQuery] = useState('');
  const [fullData, setFullData] = useState([]);
  const todolist = useSelector(state => state.todoReducer.todolist);

  useEffect(() => {
    getTodos();
  }, [todolist]);

  const getTodos = () => {
    setTodos(todolist);
    setFullData(todolist);
  };

  const goToCreateTodo = () => {
    navigation.navigate('CreateTodo');
  };

  const goToUpdateTodo = id => {
    navigation.navigate('UpdateTodo', {id});
  };

  const handleSearch = text => {
    let filteredData = fullData.filter(todo => {
      return contains(todo, text);
    });
    setTodos(filteredData);
    setQuery(text);
  };

  const contains = ({title}, query) => {
    if (title.includes(query)) {
      return true;
    }
    return false;
  };

  const RenderEmptyView = () => {
    return (
      <View style={styles.emptyViewContainer}>
        <Text style={styles.emptyViewMainText}>No Tasks to show.</Text>
      </View>
    );
  };

  const renderSearchBar = () => {
    return (
      <>
        <View style={styles.searchBar}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              source={require('../assets/search.png')}
              style={styles.searchIcon}
            />
            <TextInput
              defaultValue={query}
              onChangeText={handleSearch}
              placeholder="Search"
              style={{flex: 1}}
            />
          </View>
        </View>
        {todos.length === 0 && <RenderEmptyView />}
      </>
    );
  };

  const RenderTodos = ({item, index}) => {
    return (
      <Card
        id={item.id}
        text={item.title}
        time={item.date}
        function={goToUpdateTodo}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Tasks</Text>
        <Button text="Add Task +" function={goToCreateTodo} />
      </View>
      <FlatList
        data={todos}
        renderItem={RenderTodos}
        keyExtractor={item => item.id}
        ListHeaderComponent={renderSearchBar()}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 14,
  },
  headerText: {
    fontSize: 26,
    fontWeight: 'bold',
  },
  emptyViewContainer: {
    marginTop: 20,
  },
  emptyViewMainText: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  searchBar: {
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    marginVertical: 10,
    borderRadius: 6,
    borderWidth: 0.5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  searchIcon: {
    transform: [
      {
        scale: 0.7,
      },
    ],
  },
});

export const screenOptions = {
  headerShown: false,
};

export default Home;
