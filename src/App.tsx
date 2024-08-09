import React , {useState} from 'react';
import {
  SafeAreaView,
  FlatList,
  StyleSheet,
  View
} from 'react-native';
import music_data from './music-data.json';
import SongCard from './components/SongCard/card';
import SearchBar from './components/SearchBar/SearchBar.js';

function App(){

  const [list, setList] = useState(music_data);

  const renderSong = ({item}) => <SongCard song={item} />;

  const renderSeperator = () => <View style = {styles.seperator}/> //nesneler arasına ayıran çizgi koymak için
  
  const handleSearch = text => {
    const filteredList = music_data.filter(song => {
      const searchedText = text.toLowerCase();
      const currentTitle = song.title ? song.title.toLowerCase() : ''; // null kontrolü
  
      return currentTitle.indexOf(searchedText) > -1;
    });
  
    setList(filteredList);
  };
  
  return (
    <SafeAreaView style={styles.container}>
     <SearchBar onSearch={handleSearch}/>
        <FlatList
          keyExtractor={item => item.u_id.toString()}
          data={list}
          renderItem={renderSong}
          ItemSeparatorComponent={renderSeperator}
        />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1},
  seperator: {
    borderWidth: 0.75, //kalınlık
    borderColor: 'silver',
  }
})

export default App;
