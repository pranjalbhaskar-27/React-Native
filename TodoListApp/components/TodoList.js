// TodoList.js

import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [text, setText] = useState('');

    const addTodo = () => {
        if (text) {
            setTodos([...todos, { text, id: Math.random().toString(), completed: false }]);
            setText('');
        }
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    const toggleTodo = (id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>To-Do List</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter a task..."
                value={text}
                onChangeText={(text) => setText(text)}
            />
            <Button title="Add Task" onPress={addTodo} />
            <FlatList
                style={styles.list}
                data={todos}
                renderItem={({ item }) => (
                    <View style={styles.todoItem}>
                        <TouchableOpacity onPress={() => toggleTodo(item.id)}>
                            <Text style={item.completed ? styles.completedText : styles.todoText}>
                                {item.text}
                            </Text>
                        </TouchableOpacity>
                        <Button title="X" onPress={() => deleteTodo(item.id)} />
                    </View>
                )}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 8,
        paddingHorizontal: 8,
    },
    list: {
        marginTop: 16,
    },
    todoItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 8,
    },
    todoText: {
        flex: 1,
        textDecorationLine: 'none',
    },
    completedText: {
        flex: 1,
        textDecorationLine: 'line-through',
        color: 'grey',
    },
});

export default TodoList;
