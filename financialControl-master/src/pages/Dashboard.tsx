// src/pages/Dashboard.tsx
import React, { useState, useEffect } from 'react';
import * as C from '../App.styles'; // Lembre-se de ajustar o caminho corretamente
import { Item } from '../types/item';
import { categories } from '../data/categories';
import { items } from '../data/item';
import { getCurrentMonth, filterListByMonth } from '../helpers/dateFilter';
import { TableArea } from '../components/TableArea';
import { InfoArea } from '../components/InfoArea';
import { InputArea } from '../components/InputArea';
import { Pie } from 'react-chartjs-2';  // Importando o gráfico Pie
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Habilitando os elementos do gráfico Pie
ChartJS.register(ArcElement, Tooltip, Legend);

const Dashboard = () => {
  const [list, setList] = useState(items);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  useEffect(() => {
    setFilteredList(filterListByMonth(list, currentMonth));
  }, [list, currentMonth]);

  useEffect(() => {
    let incomeCount = 0;
    let expenseCount = 0;

    for (let i in filteredList) {
      if (categories[filteredList[i].category].expense) {
        expenseCount += filteredList[i].value;
      } else {
        incomeCount += filteredList[i].value;
      }
    }
    setIncome(incomeCount);
    setExpense(expenseCount);
  }, [filteredList]);

  const handleMonthChange = (newMonth: string) => {
    setCurrentMonth(newMonth);
  };

  const handleAddItem = (item: Item) => {
    let newList = [...list];
    newList.push(item);
    setList(newList);
  };

  // Dados para o gráfico Pie
  const data = {
    labels: ['Receita', 'Despesa'],
    datasets: [
      {
        label: '# de valores',
        data: [income, expense],
        backgroundColor: ['#36A2EB', '#FF6384'], // Azul para receita, Vermelho para despesa
        borderColor: ['#36A2EB', '#FF6384'],
        borderWidth: 1,
      },
    ],
  };

  return (
    <C.Container>
      <C.Header>
        <C.HeaderText>Controle Financeiro</C.HeaderText>
      </C.Header>
      <C.Body>
        <InfoArea
          currentMonth={currentMonth}
          onMonthChange={handleMonthChange}
          income={income}
          expense={expense}
        />
        <InputArea onAdd={handleAddItem} />
        <TableArea list={filteredList} />

        {/* Adicionando o gráfico Pie abaixo */}
        <div style={{ width: '400px', margin: '50px auto' }}>
       
          <Pie data={data} />
        </div>
      </C.Body>
    </C.Container>
  );
};
// Estilos inline modificados
const styles = {
    pageContainer: {
      backgroundColor: '#E0FFFF	', 
      minHeight: '100vh', 
      color: '#fff', 
      padding: '20px',
    },
    body: {
      display: 'flex',
      flexDirection: 'column' as 'column',
      gap: '40px',
    },
    infoAndInput: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      gap: '20px',
      flexWrap: 'wrap' as 'wrap',
    },
    chartContainer: {
      textAlign: 'center' as 'center',
      margin: '0 auto',
      width: '400px',
    },
    chartTitle: {
      color: '#fff', // Título do gráfico em branco
    },
    tableContainer: {
      marginTop: '20px',
    },
    headerText: {
      color: '#fff', // Cor do texto do cabeçalho em branco
    },
  };
  
  export default Dashboard;
 
