'use client';

import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';

type Tarefa = { 
  id: string;
  titulo: string;
  concluida: boolean; 
};

export default function ListaDeTarefas() {

    const [tarefas, setTarefas] = useState<Tarefa[]>([]);

    useEffect(() => {
      
    
     async function carregarTarefas() {

        const { data, error } = await supabase 
        .from('tarefas') 
        .select('*');

        if (error) { 
            console.log('Erro ao buscar tarefas:', error); 
            return;
        } 
      if(data){
      setTarefas(data);
      }
    }

    
    carregarTarefas(); 
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