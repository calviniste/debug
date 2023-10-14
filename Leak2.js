import React, { useState, useEffect } from 'react';
import { View, Text, Button, TextInput, SectionList } from 'react-native';

function extractLetters(items) {
  const letters = new Set();
  items.forEach(item => letters.add(item.substring(0, 1)));
  return Array.from(letters).sort();
}

const Item = ({ name }) => (
  <Text style={{ padding: 10, backgroundColor: '#eee' }}>{name}</Text>
);

const Header = ({ section }) => (
  <Text style={{ padding: 10 }}>SECTION {section.letter}</Text>
);

const NamesList = ({ data }) => {
  const [sections, setSections] = useState([]);

  useEffect(() => {
    const letters = extractLetters(data);
    const newSections = letters.map(letter => {
      const sectionData = data.filter(item => item.startsWith(letter));
      return {
        letter,
        data: sectionData,
        renderItem: ({ item }) => <Item name={item} />,
      };
    });
    setSections(newSections);
  }, [data]);

  return (
    <SectionList
      sections={sections}
      renderSectionHeader={({ section }) => <Header section={section} />}
    />
  );
};

export default function DetailsScreen() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(new Array(600).fill().map(() => Math.random().toString(36).substring(7)));
  const [input, setInput] = useState('');

  const addNewItem = () => {
    setData(prevData => [input, ...prevData]);
    setInput('');
  };

  return (
    <View>
      <TextInput
        placeholder="New item title"
        value={input}
        style={{ padding: 10 }}
        onChangeText={setInput}
      />
      <Button title="ADD NEW ITEM" onPress={addNewItem} />
      <Button
        title={`Tapped ${count} times`}
        onPress={() => setCount(prevCount => prevCount + 1)}
      />
      <NamesList data={data} />
    </View>
  );
}