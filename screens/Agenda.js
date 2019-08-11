import React, {Component} from 'react'
import { AppRegistry } from 'react-native';
import {StyleSheet, Text, View, ImageBackground, FlatList, TouchableOpacity, Platform} from 'react-native'
import moment from 'moment'
import 'moment/locale/pt-br'
import todayImage from '../../assets/imgs/today.jpg'
import commonStyles from '../commonStyles'
import { Header } from 'react-native/Libraries/NewAppScreen';
import Task from '../components/Task'
import Icon from 'react-native-vector-icons/FontAwesome'
import ActionButton from 'react-native-action-button'
import AddTask from './AddTask'

//const Agenda =() =>(
    export default class Agenda extends Component {
    state = {
        tasks: [
            { id: Math.random(), desc: 'Comprar o curso React Native',
                estimateAt: new Date(), doneAt: new Date() },
            { id: Math.random(), desc: 'Conlcuir o curso', 
                estimateAt: new Date(), doneAt: null},
            { id: Math.random(), desc: 'Comprar o curso React Native',
                estimateAt: new Date(), doneAt: new Date() },
            { id: Math.random(), desc: 'Conlcuir o curso', 
                estimateAt: new Date(), doneAt: null},
            { id: Math.random(), desc: 'Comprar o curso React Native',
                estimateAt: new Date(), doneAt: new Date() },
            { id: Math.random(), desc: 'Conlcuir o curso', 
                estimateAt: new Date(), doneAt: null},
            { id: Math.random(), desc: 'Comprar o curso React Native',
                estimateAt: new Date(), doneAt: new Date() },
            { id: Math.random(), desc: 'Conlcuir o curso', 
                estimateAt: new Date(), doneAt: null},
            { id: Math.random(), desc: 'Comprar o curso React Native',
                estimateAt: new Date(), doneAt: new Date() },
            { id: Math.random(), desc: 'Conlcuir o curso', 
                estimateAt: new Date(), doneAt: null},
            { id: Math.random(), desc: 'Comprar o curso React Native',
                estimateAt: new Date(), doneAt: new Date() },
            { id: Math.random(), desc: 'Conlcuir o curso', 
                estimateAt: new Date(), doneAt: null},
        ],
        visibleTasks: [],
        showDoneTasks: true,
        showAddTask: false// exibe ou mostra o modal
    }

    addTask = task => {
        const tasks =[...this.state.tasks]
        tasks.push({
            id: Math.random(),
            desc: task.desc,
            estimateAt: task.desc,
            doneAt: null
        })
        this.setState({ tasks, showAddTask: false}
            , this.filterTasks)
    }

    filterTasks = () => {
        let visibleTasks = null
        //mostra todas as tarefas
        if (this.state.showDoneTasks){
            visibleTasks = [...this.state.tasks]
        } else {
            //filtra as tarefas mostrando apenas as pendentes
            const pending = task => task.doneAt === null
            visibleTasks = this.state.tasks.filter(pending)
        }
        this.setState( { visibleTasks })
    }

    toggleFilter = () => {
        this.setState({ showDoneTasks: !this.state.showDoneTasks }
            , this.filterTasks)
    }
    //assim que o componente foi montado ele chama a função filtrar tasks
    componentDidMount = () => {
        this.filterTasks()
    }
  
    toggleTask = id => {
        
        const tasks = this.state.tasks.map(task =>{
            if(task.id === id) {
                task = {...task}
                task.doneAt = task.doneAt ? null : new Date ()   
            }
            return task
        })
        
        /*  usando o mesmo resultado com forEach
        const tasks =[...this.state.tasks]
        
        tasks.forEach(task => {
            if (task.id === id) {
                task.doneAt = task.doneAt ? null : new Date ()
            }
        }) */
        this.setState( { tasks }, this.filterTasks)
    }

    render(){
        return(
            <View style={style.container}>
                <AddTask isVisible={this.state.showAddTask}
                    onSave={this.addTask}
                    onCancel={() => this.setState({ showAddTask:false})} />
                <ImageBackground source={todayImage} 
                    style={style.background}>
                        <View style={style.iconBar}>
                            <TouchableOpacity onPress={this.toggleFilter}>
                                <Icon name={this.state.showDoneTasks ?'eye':'eye-slash'}
                                    size={20} color={commonStyles.colors.secondary} />
                            </TouchableOpacity>
                        </View>
                        <View style={style.titleBar}>
                            <Text style={style.title}>Hoje</Text>
                            <Text style={style.subtitle}>
                                {moment().locale('pt-br').format('ddd, D [de] MMMM')}
                                
                            </Text>   
                        </View>
                </ImageBackground>
                <View style={style.tasksContainer}>
                    <FlatList data={this.state.visibleTasks}
                        keyExtractor={item => `${item.id}`} 
                        renderItem={({item}) => 
                            <Task {...item} toggleTask={this.toggleTask}/> }/>
                  

                </View>
                <ActionButton buttonColor={commonStyles.colors.today}
                    onPress={() =>{this.setState({ showAddTask:true })}} />
            </View>
        )
    }
}   
const style = StyleSheet.create({
    container: {
        flex:1,
    },
    background: {
        flex:3,
    },
    titleBar:{
        flex:1,
        justifyContent: 'flex-end'
    },
    title:{
        fontFamily: commonStyles.fontFamily,
        color: commonStyles.colors.secondary,
        fontSize: 50,
        marginLeft: 20,
        marginBottom: 10,
    },
    subtitle: {
        fontFamily: commonStyles.fontFamily,
        color: commonStyles.colors.secondary,
        fontSize: 20,
        marginLeft: 20,
        marginBottom: 30,
    },
    tasksContainer: {
        flex:7,
    },
    iconBar :{
        marginTop: Platform.OS ==='ios' ? 30: 10,
        marginHorizontal:20,
        flexDirection: 'row',   
        justifyContent: 'flex-end',
    }
});
//export default Agenda;