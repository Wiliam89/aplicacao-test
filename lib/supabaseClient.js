import { useEffect, useState } from 'react';
import { supabase } from './supabaseClient';

export default function ListaDeTarefas() {

    const [tarefas, setTarefas] = useState([]);
      
    // Função para buscar tarefas
    const buscarTarefas = async () => {

        const { data, error } = await supabase 
        .from('tarefas') 
        .select('*');

        if (error) { 
            console.log('Erro ao buscar tarefas:', error); 
            return;
        } 
    
      setTarefas(data);
    };

    // Executa quando a página carregar 
    useEffect(() => { 
      buscarTarefas(); 
     }, []);

     return (
         <div> 
            <h1>Lista de Tarefas</h1> 
            
            {tarefas.map((tarefa) => (
                 <div key={tarefa.id}> 
                 <p> 
                    {tarefa.concluida ? '✅' : '⬜'} {tarefa.titulo} 
                 </p> 
                 
                </div> 
                    
            ))} 

          </div> 
                    
    ); 
}